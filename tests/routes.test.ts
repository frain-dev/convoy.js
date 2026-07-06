import { Convoy } from '../src/convoy';

const requestMock = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
};

jest.mock('axios', () => ({
    default: {
        create: jest.fn((config: any) => {
            (globalThis as any).__axiosCreateConfig = config;
            return requestMock;
        }),
    },
}));

const ok = { data: { status: true, message: 'ok', data: null } };

describe('Route contracts', function () {
    let convoy: Convoy;

    beforeEach(function () {
        jest.clearAllMocks();
        requestMock.get.mockResolvedValue(ok);
        requestMock.post.mockResolvedValue(ok);
        requestMock.put.mockResolvedValue(ok);
        requestMock.delete.mockResolvedValue(ok);

        convoy = new Convoy({
            api_key: 'test-api-key',
            uri: 'https://us.getconvoy.cloud/api/v1',
            project_id: 'test-project-id',
        });
    });

    test('client scopes baseURL to the project and pins the API version', () => {
        const config = (globalThis as any).__axiosCreateConfig;
        expect(config.baseURL).toBe('https://us.getconvoy.cloud/api/v1/projects/test-project-id');
        expect(config.headers.Authorization).toBe('Bearer test-api-key');
        expect(config.headers['X-Convoy-Version']).toBe('2025-11-24');
    });

    test('batchResend posts an empty body with query filters', async () => {
        await convoy.eventDeliveries.batchResend({ status: ['Failure'] });
        expect(requestMock.post).toHaveBeenCalledWith('/eventdeliveries/batchretry?status=Failure', {});
    });

    test('forceResend posts an ids body', async () => {
        await convoy.eventDeliveries.forceResend({ ids: ['ed-1'] });
        expect(requestMock.post).toHaveBeenCalledWith('/eventdeliveries/forceresend', { ids: ['ed-1'] });
    });

    test('endpoint pause uses PUT', async () => {
        await convoy.endpoints.pause('ep-1');
        expect(requestMock.put).toHaveBeenCalledWith('/endpoints/ep-1/pause', undefined);
    });

    test('endpoint expireSecret uses PUT', async () => {
        await convoy.endpoints.expireSecret('ep-1', { expiration: 24 });
        expect(requestMock.put).toHaveBeenCalledWith('/endpoints/ep-1/expire_secret', { expiration: 24 });
    });

    test('broadcast event posts to /events/broadcast', async () => {
        await convoy.events.createBroadcastEvent({ event_type: 'x', data: {} });
        expect(requestMock.post).toHaveBeenCalledWith('/events/broadcast', { event_type: 'x', data: {} });
    });

    test('fanout event posts to /events/fanout', async () => {
        await convoy.events.createFanOutEvent({ owner_id: 'o-1', event_type: 'x', data: {} });
        expect(requestMock.post).toHaveBeenCalledWith('/events/fanout', { owner_id: 'o-1', event_type: 'x', data: {} });
    });

    test('event create rejects missing endpoint_id with a clear error', async () => {
        await expect(convoy.events.create({} as any)).rejects.toThrow('Endpoint ID is empty');
        await expect(convoy.events.create(undefined as any)).rejects.toThrow('Endpoint ID is empty');
        expect(requestMock.post).not.toHaveBeenCalled();
    });

    test('transport errors are rethrown without the axios config carrying credentials', async () => {
        const transportError: any = new Error('connect ECONNREFUSED 127.0.0.1:80');
        transportError.code = 'ECONNREFUSED';
        transportError.config = { headers: { Authorization: 'Bearer test-api-key' } };
        transportError.request = {};
        requestMock.get.mockRejectedValueOnce(transportError);

        try {
            await convoy.endpoints.all({});
            throw new Error('expected rejection');
        } catch (error: any) {
            expect(error.message).toContain('ECONNREFUSED');
            expect(error.config).toBeUndefined();
            expect(error.request).toBeUndefined();
        }
    });
});
