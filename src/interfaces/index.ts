import {SqsOptions} from "./sqs-options";

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
    sqsOptions?: SqsOptions

    /**
     * TODO: add Kafka
     */
    kafkaOptions?: any
}
