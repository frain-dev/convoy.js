import { Client } from '../client';
import { BatchResend } from '../interfaces/event-delivery';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class EventDelivery {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async all(query?: any) {
    try {
      const { data } = await this.client.httpGet(`/eventdeliveries`, query);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }

  async find(id: string, query?: any) {
    try {
      const { data } = await this.client.httpGet(`/eventdeliveries/${id}`, query);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }

  async resend(id: string) {
    try {
      const { data } = await this.client.httpPut(`/eventdeliveries/${id}/resend`);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }

  async batchResend(attributes: BatchResend) {
    try {
      const { data } = await this.client.httpPut(`/eventdeliveries/batchretry`, attributes);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }
}
