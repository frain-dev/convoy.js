import { Client } from '../client';
import {CreateEvent, CreateFanOutEvent} from '../interfaces/event';
import { ResponseHelper } from '../utils/helpers/response-helper';

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

    async find(id: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/events/${id}`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
