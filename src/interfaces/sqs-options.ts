import { SQS } from '@aws-sdk/client-sqs';

export interface SqsOptions {
    sqs_client: SQS;
    queueUrl: string;
}
