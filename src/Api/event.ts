import { Client } from '../client';
import { CreateBroadcastEvent, CreateEvent, CreateFanOutEvent } from '../interfaces/event';
import { ResponseHelper } from '../utils/helpers/response-helper';
import { ConfigException } from '../utils/errors';

export class Event {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async all(query?: any) {
        try {
            const { data } = await this.client.httpGet(`/events`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async create(attributes: CreateEvent, query?: any) {
        try {
            if (typeof attributes?.endpoint_id !== 'string' || attributes.endpoint_id.length === 0) {
                throw new ConfigException('Endpoint ID is empty');
            }

            const { data } = await this.client.httpPost(`/events`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async createFanOutEvent(attributes: CreateFanOutEvent, query?: any) {
        try {
            const { data } = await this.client.httpPost(`/events/fanout`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async createBroadcastEvent(attributes: CreateBroadcastEvent, query?: any) {
        try {
            const { data } = await this.client.httpPost(`/events/broadcast`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async replay(id: string, query?: any) {
        try {
            const { data } = await this.client.httpPut(`/events/${id}/replay`, undefined, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async find(id: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/events/${id}`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
