import { Client } from '../client';
import { CreateSource, UpdateSource } from '../interfaces/source';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Source {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async all(query?: any) {
        try {
            const { data } = await this.client.httpGet(`/sources`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async create(attributes: CreateSource, query?: any) {
        try {
            const { data } = await this.client.httpPost(`/sources`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async find(id: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/sources/${id}`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async update(id: string, attributes: UpdateSource, query?: any) {
        try {
            const { data } = await this.client.httpPut(`/sources/${id}`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async delete(id: string, attributes?: any, query?: any) {
        try {
            const { data } = await this.client.httpDelete(`/sources/${id}`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
