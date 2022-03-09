import { IConfig } from './interfaces';
import * as base64 from 'base-64';
const axios = require('axios').default;

export class Client {
  private request;
  public baseUri = 'https://cloud.getconvoy.io/api/v1';

  constructor(options: IConfig) {
    this.request = axios.create({
      baseURL: this.getBaseUrl(options.uri as string),
      headers: {
        Authorization: this.getAuthorization(options),
        'Content-Type': 'application/json',
      },
    });
  }

  getBaseUrl(uri: string): string {
    return uri ? uri : this.baseUri;
  }

  getAuthorization(options: IConfig) {
    if (options.api_key) {
      return `Bearer ${options.api_key}`;
    }

    const basic = base64.encode(`${options.username}:${options.password}`);
    return `Basic ${basic}`;
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
