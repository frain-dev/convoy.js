import { Client } from '../client';
import { CreateEndpoint, UpdateEndpoint } from '../interfaces/endpoint';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Endpoint {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async all(appId: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/applications/${appId}/endpoints`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async create(appId: string, attributes: CreateEndpoint, query?: any) {
        try {
            const { data } = await this.client.httpPost(`/applications/${appId}/endpoints`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async find(appId: string, endpointId: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/applications/${appId}/endpoints/${endpointId}`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async update(appId: string, endpointId: string, attributes: UpdateEndpoint, query?: any) {
        try {
            const { data } = await this.client.httpPut(
                `/applications/${appId}/endpoints/${endpointId}`,
                attributes,
                query,
            );
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async delete(appId: string, endpointId: string, attributes?: any, query?: any) {
        try {
            const { data } = await this.client.httpDelete(
                `/applications/${appId}/endpoints/${endpointId}`,
                attributes,
                query,
            );
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
