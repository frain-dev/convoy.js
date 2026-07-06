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
     * Convoy instance API base, e.g. https://us.getconvoy.cloud/api/v1,
     * https://eu.getconvoy.cloud/api/v1, or your self-hosted instance
     */
    uri: string;

    /**
     * AWS SQS Options
     */
    sqs_options?: SqsOptions;

    /**
     * Apache Kafka Options
     */
    kafka_options?: KafkaOptions;
}
