import { Client } from '../client';
import { ResponseHelper } from '../utils/helpers/response-helper';
import { CreatePortalLink, UpdatePortalLink } from '../interfaces/portal-links';

export class PortalLink {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async create(attributes: CreatePortalLink, query?: any) {
        try {
            const { data } = await this.client.httpPost(`/portal-links`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async find(id: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/portal-links/${id}`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async all(query?: any) {
        try {
            const { data } = await this.client.httpGet(`/portal-links`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async update(id: string, attributes: UpdatePortalLink, query?: any) {
        try {
            const { data } = await this.client.httpPut(`/portal-links/${id}`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async revoke(id: string) {
        try {
            const { data } = await this.client.httpPut(`/portal-links/${id}/revoke`);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
