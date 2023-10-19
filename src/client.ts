import { IConfig } from './interfaces';
import { ConfigException } from './utils/errors';
import {SqsOptions} from "./interfaces/sqs-options";
const axios = require('axios').default;

export class Client {
    private request;
    public baseUri = 'https://dashboard.getconvoy.io/api/v1';
    public sqs?: SqsOptions;

    constructor(options: IConfig) {
        if (!options.api_key) {
            throw new ConfigException('API Key is required');
        }

        if (!options.project_id) {
            throw new ConfigException('Project ID is required');
        }

        this.request = axios.create({
            baseURL: `${this.getBaseUrl(options.uri as string)}/projects/${options.project_id}`,
            headers: {
                Authorization: `Bearer ${options.api_key}`,
                'Content-Type': 'application/json',
            },
        });

        if (options.sqsOptions){
            this.sqs = options.sqsOptions
        }
    }

    getBaseUrl(uri: string): string {
        return uri ? uri : this.baseUri;
    }

    public async httpGet(path: string, query?: any) {
        return this.request.get(this.buildPath(path, query));
    }

    public async httpPost(path: string, data: any, query?: any) {
        return this.request.post(this.buildPath(path, query), data);
    }

    public async httpPut(path: string, data?: any, query?: any) {
        return this.request.put(this.buildPath(path, query), data);
    }

    public async httpDelete(path: string, data?: any, query?: any) {
        return this.request.delete(this.buildPath(path, query), data);
    }

    private buildPath(path: string, query: any) {
        if (this.hasQueryParameters(query)) {
            path = `${path}?${this.buildQueryParams(query)}`;
        }

        return path;
    }

    private buildQueryParams(query: any) {
        return new URLSearchParams(query).toString();
    }

    private hasQueryParameters(query: any): boolean {
        return query && Object.getOwnPropertyNames(query).length > 0;
    }
}
