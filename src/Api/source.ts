import { Client } from '../client';
import { CreateSource, QuerySources, UpdateSource } from '../interfaces/source';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Source {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async all(query?: QuerySources) {
        try {
            const { data } = await this.client.httpGet(`/sources`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async create(attributes: CreateSource) {
        try {
            const { data } = await this.client.httpPost(`/sources`, attributes);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async find(id: string) {
        try {
            const { data } = await this.client.httpGet(`/sources/${id}`);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async update(id: string, attributes: UpdateSource) {
        try {
            const { data } = await this.client.httpPut(`/sources/${id}`, attributes);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async delete(id: string) {
        try {
            const { data } = await this.client.httpDelete(`/sources/${id}`);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
