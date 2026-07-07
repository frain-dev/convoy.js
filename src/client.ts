import { IConfig } from './interfaces';
import { ConfigException } from './utils/errors';
import { SqsOptions } from './interfaces/sqs-options';
import { KafkaOptions } from './interfaces/kafka-options';
const axios = require('axios').default;

export class Client {
    private request;
    public sqs?: SqsOptions;
    public kafka?: KafkaOptions;

    constructor(options: IConfig) {
        if (!options.api_key) {
            throw new ConfigException('API Key is required');
        }

        if (!options.project_id) {
            throw new ConfigException('Project ID is required');
        }

        if (!options.uri) {
            throw new ConfigException('URI is required, e.g. https://us.getconvoy.cloud/api/v1');
        }

        if (options.uri.includes('/projects/') || options.uri.replace(/\/+$/, '').endsWith('/projects')) {
            throw new ConfigException(
                'URI must be the instance API base without a project path; pass project_id separately',
            );
        }

        this.request = axios.create({
            baseURL: `${this.getBaseUrl(options.uri)}/projects/${options.project_id}`,
            headers: {
                Authorization: `Bearer ${options.api_key}`,
                'Content-Type': 'application/json',
                // Pin the API version this SDK release was built against; the
                // server's request migrations translate for older instances.
                'X-Convoy-Version': '2025-11-24',
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
        return uri.replace(/\/+$/, '');
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
