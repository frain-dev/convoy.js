import { CompressionTypes, Kafka } from 'kafkajs';

export interface KafkaOptions {
    kafka_client: Kafka;
    topic: string;
    acks?: number;
    timeout?: number;
    compression?: CompressionTypes;
}
