import { SendMessageRequest } from '@aws-sdk/client-sqs';
import { Client } from '../client';
import { CreateEvent, CreateFanOutEvent } from '../interfaces/event';

export class SQS {
    private client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async writeEvent(payload: CreateEvent) {
        try {
            const params: SendMessageRequest = {
                MessageBody: JSON.stringify(payload),
                QueueUrl: this.client.sqs?.queueUrl as string,
            };
            return await this.client.sqs?.sqsClient.sendMessage(params);
        } catch (error) {
            throw error;
        }
    }

    async writeFanOutEvent(payload: CreateFanOutEvent) {
        try {
            const params: SendMessageRequest = {
                MessageBody: JSON.stringify(payload),
                QueueUrl: this.client.sqs?.queueUrl as string,
            };
            return this.client.sqs?.sqsClient.sendMessage(params);
        } catch (error) {
            throw error;
        }
    }
}
