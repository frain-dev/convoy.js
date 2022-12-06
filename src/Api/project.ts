import { Client } from '../client';
import { UpdateProject } from '../interfaces/project';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Project {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async find(query?: any) {
        try {
            const { data } = await this.client.httpGet(`/`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async update(attributes: UpdateProject, query?: any) {
        try {
            const { data } = await this.client.httpPut(`/`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    async delete(attributes?: any, query?: any) {
        try {
            const { data } = await this.client.httpDelete(`/`, attributes, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
