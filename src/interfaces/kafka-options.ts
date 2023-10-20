import { CompressionTypes, Kafka } from 'kafkajs';

export interface KafkaOptions {
    kafkaClient: Kafka;
    topic: string;
    acks?: number;
    timeout?: number;
    compression?: CompressionTypes;
}
