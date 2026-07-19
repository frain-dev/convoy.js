# ModelsPubSubConfig

## Example Usage

```typescript
import { ModelsPubSubConfig } from "convoy.js/models";

let value: ModelsPubSubConfig = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `amqp`                                                                       | [models.ModelsAmqpPubSubconfig](../models/models-amqp-pub-subconfig.md)      | :heavy_minus_sign:                                                           | N/A                                                                          |
| `google`                                                                     | [models.ModelsGooglePubSubConfig](../models/models-google-pub-sub-config.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `kafka`                                                                      | [models.ModelsKafkaPubSubConfig](../models/models-kafka-pub-sub-config.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `sqs`                                                                        | [models.ModelsSQSPubSubConfig](../models/models-sqs-pub-sub-config.md)       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | [models.DatastorePubSubType](../models/datastore-pub-sub-type.md)            | :heavy_minus_sign:                                                           | N/A                                                                          |
| `workers`                                                                    | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |