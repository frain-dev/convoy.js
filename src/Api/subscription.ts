import { Client } from '../client';
import { CreateSubscription, QuerySubscriptions, UpdateSubscription } from '../interfaces/subscription';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Subscription {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async all(query?: QuerySubscriptions) {
        try {
            const { data } = await this.client.httpGet(`/subscriptions`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async create(attributes: CreateSubscription) {
        try {
            const { data } = await this.client.httpPost(`/subscriptions`, attributes);
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

    async update(id: string, attributes: UpdateSubscription) {
        try {
            const { data } = await this.client.httpPut(`/subscriptions/${id}`, attributes);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async delete(id: string) {
        try {
            const { data } = await this.client.httpDelete(`/subscriptions/${id}`);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
