import { SendMessageRequest } from '@aws-sdk/client-sqs';
import { Client } from '../client';
import { CreateEvent, CreateFanOutEvent } from '../interfaces/event';
import { ResponseHelper } from '../utils/helpers/response-helper';
import { ConfigException } from '../utils/errors';

export class SQS {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async writeEvent(payload: CreateEvent | CreateFanOutEvent) {
        if (!this.client.sqs) {
            const error = new ConfigException('the sqs client is not configured');
            return ResponseHelper.handleErrors(error);
        }

        try {
            const params: SendMessageRequest = {
                MessageBody: JSON.stringify(payload),
                QueueUrl: this.client.sqs?.queueUrl as string,
            };
            return await this.client.sqs?.sqsClient.sendMessage(params);
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
