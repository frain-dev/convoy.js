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
    if (query && Object.getOwnPropertyNames(query).length > 0) {
      path = `${path}?${this.buildQueryParams(query)}`;
    }

    return this.request.get(path);
  }

  public async httpPost(path: string, data: any, query?: any) {
    if (query && Object.getOwnPropertyNames(query).length > 0) {
      path = `${path}?${this.buildQueryParams(query)}`;
    }

    return this.request.post(path, data);
  }

  public async httpPut(path: string, data?: any) {
    return this.request.put(path, data);
  }

  public async httpDelete(path: string, data?: any) {
    return this.request.delete(path, data);
  }

  private buildQueryParams(query: any) {
    return new URLSearchParams(query).toString();
  }
}
