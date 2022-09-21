import { Client } from '../client';
import { ResponseHelper } from '../utils/helpers/response-helper';

export class DeliveryAttempt {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    public async all(eventDeliveryId: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(`/eventdeliveries/${eventDeliveryId}/deliveryattempts`, query);
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }

    public async find(eventDeliveryId: string, deliveryAttemptId: string, query?: any) {
        try {
            const { data } = await this.client.httpGet(
                `/eventdeliveries/${eventDeliveryId}/deliveryattempts/${deliveryAttemptId}`,
                query,
            );
            return data;
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
