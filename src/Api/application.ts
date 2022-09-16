import { Client } from '../client';
import { CreateApplication, UpdateApplication } from '../interfaces/application';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Application {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async all(query?: any) {
        try {
            const { data } = await this.client.httpGet(`/applications`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async create(attributes: CreateApplication, query?: any) {
        try {
            const { data } = await this.client.httpPost(`/applications`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async find(id: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/applications/${id}`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async update(id: string, attributes: UpdateApplication, query?: any) {
        try {
            const { data } = await this.client.httpPut(`/applications/${id}`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async delete(id: string, attributes?: any, query?: any) {
        try {
            const { data } = await this.client.httpDelete(`/applications/${id}`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
