import { Client } from '../client';
import { CreateGroup, UpdateGroup } from '../interfaces/group';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class Group {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async all(query?: any) {
    try {
      const { data } = await this.client.httpGet(`/groups`, query);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }

  async create(attributes: CreateGroup) {
    try {
      const { data } = await this.client.httpPost(`/groups`, attributes);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }

  async find(id: string, query?: any) {
    try {
      const { data } = await this.client.httpGet(`/groups/${id}`, query);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }

  async update(id: string, attributes: UpdateGroup) {
    try {
      const { data } = await this.client.httpPut(`/groups/${id}`, attributes);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }

  async delete(id: string, attributes?: any) {
    try {
      const { data } = await this.client.httpDelete(`/groups/${id}`, attributes);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }
}
