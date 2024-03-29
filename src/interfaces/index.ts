import { SqsOptions } from './sqs-options';
import { KafkaOptions } from './kafka-options';

export interface IConfig {
    /**
     * API Key used for bearer token authentication
     */
    api_key: string;

    /**
     * Project ID
     */
    project_id: string;

    /**
     * Convoy self-hosted uri
     */
    uri?: string;

    /**
     * AWS SQS Options
     */
    sqs_options?: SqsOptions;

    /**
     * Apache Kafka Options
     */
    kafka_options?: KafkaOptions;
}
