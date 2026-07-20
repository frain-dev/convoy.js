# EventMetadataPubSub

## Example Usage

```typescript
import { EventMetadataPubSub } from "convoy.js/models";

let value: EventMetadataPubSub = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `amqp`                                                            | [models.EventMetadataAmqp](../models/event-metadata-amqp.md)      | :heavy_minus_sign:                                                | N/A                                                               |
| `google`                                                          | [models.EventMetadataGoogle](../models/event-metadata-google.md)  | :heavy_minus_sign:                                                | N/A                                                               |
| `kafka`                                                           | [models.EventMetadataKafka](../models/event-metadata-kafka.md)    | :heavy_minus_sign:                                                | N/A                                                               |
| `sqs`                                                             | [models.EventMetadataSqs](../models/event-metadata-sqs.md)        | :heavy_minus_sign:                                                | N/A                                                               |
| `type`                                                            | [models.DatastorePubSubType](../models/datastore-pub-sub-type.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `workers`                                                         | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |