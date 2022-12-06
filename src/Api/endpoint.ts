import { Client } from '../client';
import { CreateEndpoint, UpdateEndpoint } from '../interfaces/endpoint';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Endpoint {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async all(query?: any) {
        try {
            const { data } = await this.client.httpGet(`/endpoints`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async create(attributes: CreateEndpoint, query?: any) {
        try {
            const { data } = await this.client.httpPost(`/endpoints`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async find(endpointId: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/endpoints/${endpointId}`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async update(endpointId: string, attributes: UpdateEndpoint, query?: any) {
        try {
            const { data } = await this.client.httpPut(`/endpoints/${endpointId}`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async delete(endpointId: string, attributes?: any, query?: any) {
        try {
            const { data } = await this.client.httpDelete(`/endpoints/${endpointId}`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
