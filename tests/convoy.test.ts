import { DeliveryAttempt } from '../src/Api/delivery-attempt';
import { Endpoint } from '../src/Api/endpoint';
import { EventDelivery } from '../src/Api/event-delivery';
import { Event } from '../src/Api/event';
import { Project } from '../src/Api/project';
import { Client } from '../src/client';
import { Convoy } from '../src/convoy';
import { Source } from '../src/Api/source';
import { Subscription } from '../src/Api/subscription';

describe('Convoy', function () {
    test.each([
        'https://us.getconvoy.cloud/api/v1/projects/test-project-id',
        'https://us.getconvoy.cloud/api/v1/projects',
        'https://us.getconvoy.cloud/api/v1/projects/',
    ])('rejects a uri that already contains a project path: %s', (uri) => {
        expect(() => {
            new Convoy({
                api_key: 'test-api-key',
                uri,
                project_id: 'test-project-id',
            });
        }).toThrow('URI must be the instance API base');
    });

    let convoy: any;

    beforeEach(function () {
        convoy = new Convoy({
            api_key: 'random-api-key',
            project_id: 'project-id',
            uri: 'https://us.getconvoy.cloud/api/v1'
        });
    });

    test('requires a uri', () => {
        expect(
            () =>
                new Convoy({
                    api_key: 'random-api-key',
                    project_id: 'project-id'
                } as any)
        ).toThrow('URI is required');
    });

    test('creates request client', () => {
        expect(convoy.client).toBeInstanceOf(Client);
    });

    test('creates project client', () => {
        expect(convoy.projects).toBeInstanceOf(Project);
    });

    test('creates source client', () => {
        expect(convoy.sources).toBeInstanceOf(Source);
    });

    test('creates subscription client', () => {
        expect(convoy.subscriptions).toBeInstanceOf(Subscription);
    });

    test('creates event client', () => {
        expect(convoy.events).toBeInstanceOf(Event);
    });

    test('creates event delivery client', () => {
        expect(convoy.eventDeliveries).toBeInstanceOf(EventDelivery);
    });

    test('creates endpoint client', () => {
        expect(convoy.endpoints).toBeInstanceOf(Endpoint);
    });

    test('creates delivery attempt client', () => {
        expect(convoy.deliveryAttempts).toBeInstanceOf(DeliveryAttempt);
    });
});
