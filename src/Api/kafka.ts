import { Client } from '../client';
import { CreateEvent, CreateFanOutEvent } from '../interfaces/event';
import { ResponseHelper } from '../utils/helpers/response-helper';
import { ConfigException } from '../utils/errors';
import { Partitioners, Producer } from 'kafkajs';

export class Kafka {
    private client: Client;
    private producer?: Producer;
    private isConnected: boolean = false;

    constructor(client: Client) {
        this.client = client;
        this.producer = this.client.kafka?.kafkaClient.producer({ createPartitioner: Partitioners.LegacyPartitioner });
        this.producer?.on('producer.connect', () => {
            this.isConnected = true;
        });
    }

    async writeEvent(payload: CreateEvent | CreateFanOutEvent) {
        if (!this.client.kafka) {
            throw new ConfigException('the kafka client is not configured');
        }

        try {
            if (!this.isConnected) {
                await this.producer?.connect();
            }

            const { kafkaClient, ...opts } = this.client.kafka!;
            return await this.producer?.send({
                ...opts,
                messages: [{ value: JSON.stringify(payload) }],
            });
        } catch (error) {
            ResponseHelper.handleErrors(error);
        }
    }
}
