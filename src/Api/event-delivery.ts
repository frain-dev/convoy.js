import { Client } from '../client';
import { BatchResend } from '../interfaces/event-delivery';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class EventDelivery {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async all(query?: any) {
        try {
            const { data } = await this.client.httpGet(`/eventdeliveries`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async find(id: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/eventdeliveries/${id}`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async resend(id: string, query?: any) {
        try {
            const { data } = await this.client.httpPut(`/eventdeliveries/${id}/resend`, {}, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    // Batch retries deliveries matching the query filters; the server reads
    // filters from query params only (e.g. { endpointId, eventId, status }).
    async batchResend(query?: any) {
        try {
            const { data } = await this.client.httpPost(`/eventdeliveries/batchretry`, {}, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    // Force resends previously successful deliveries by ID.
    async forceResend(attributes: BatchResend, query?: any) {
        try {
            const { data } = await this.client.httpPost(`/eventdeliveries/forceresend`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
