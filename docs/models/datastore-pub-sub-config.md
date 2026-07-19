# DatastorePubSubConfig

## Example Usage

```typescript
import { DatastorePubSubConfig } from "convoy.js/models";

let value: DatastorePubSubConfig = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `amqp`                                                                             | [models.DatastoreAmqpPubSubConfig](../models/datastore-amqp-pub-sub-config.md)     | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `google`                                                                           | [models.DatastoreGooglePubSubConfig](../models/datastore-google-pub-sub-config.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `kafka`                                                                            | [models.DatastoreKafkaPubSubConfig](../models/datastore-kafka-pub-sub-config.md)   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `sqs`                                                                              | [models.DatastoreSQSPubSubConfig](../models/datastore-sqs-pub-sub-config.md)       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `type`                                                                             | [models.DatastorePubSubType](../models/datastore-pub-sub-type.md)                  | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `workers`                                                                          | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |