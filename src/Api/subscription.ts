import { Client } from '../client';
import { CreateSubscription } from '../interfaces/subscription';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Subscription {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async all(query?: any) {
        try {
            const { data } = await this.client.httpGet(`/subscriptions`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async create(attributes: CreateSubscription, query?: any) {
        try {
            const { data } = await this.client.httpPost(`/subscriptions`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async find(id: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/subscriptions/${id}`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async delete(id: string, attributes?: any, query?: any) {
        try {
            const { data } = await this.client.httpDelete(`/subscriptions/${id}`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
