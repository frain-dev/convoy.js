import { SQS } from '@aws-sdk/client-sqs';

export interface SqsOptions {
    sqsClient: SQS;
    queueUrl: string;
}
