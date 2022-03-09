import { Client } from '../client';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class DeliveryAttempt {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  public async all(eventDeliveryId: string) {
    try {
      const { data } = await this.client.httpGet(`/eventdeliveries/${eventDeliveryId}/deliveryattempts`);
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }

  public async find(eventDeliveryId: string, deliveryAttemptId: string) {
    try {
      const { data } = await this.client.httpGet(
        `/eventdeliveries/${eventDeliveryId}/deliveryattempts/${deliveryAttemptId}`,
      );
      return data;
    } catch (error) {
      ResponseHelper.handleErrors(error);
    }
  }
}
