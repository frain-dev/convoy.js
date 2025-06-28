import { IConfig } from './interfaces';
import { ConfigException } from './utils/errors';
import { SqsOptions } from './interfaces/sqs-options';
import { KafkaOptions } from './interfaces/kafka-options';
const axios = require('axios').default;

export class Client {
    private request;
    public baseUri = 'https://dashboard.getconvoy.io/api/v1';
    public sqs?: SqsOptions;
    public kafka?: KafkaOptions;

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

        if (options.sqs_options) {
            this.sqs = options.sqs_options;
        }

        if (options.kafka_options) {
            this.kafka = options.kafka_options;
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
        const params = new URLSearchParams();
        for (const k of Object.keys(query)) {
            if (Array.isArray(query[k])) {
                for (let i = 0; i < query[k].length; i++) {
                    params.append(k, query[k][i]);
                }
            } else {
                params.append(k, query[k]);
            }
        }

        return params.toString();
    }

    private hasQueryParameters(query: any): boolean {
        return query && Object.getOwnPropertyNames(query).length > 0;
    }
}
