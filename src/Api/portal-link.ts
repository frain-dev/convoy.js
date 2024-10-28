import { Client } from '../client';
import { ResponseHelper } from '../utils/helpers/response-helper';
import { CreatePortalLink, QueryPortalLinks, UpdatePortalLink } from '../interfaces/portal-links';

export class PortalLink {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async create(attributes: CreatePortalLink) {
        try {
            const { data } = await this.client.httpPost(`/portal-links`, attributes);
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

    async all(query?: QueryPortalLinks) {
        try {
            const { data } = await this.client.httpGet(`/portal-links`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async update(id: string, attributes: UpdatePortalLink) {
        try {
            const { data } = await this.client.httpPut(`/portal-links/${id}`, attributes);
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
