# DatastoreAmqpPubSubConfig

## Example Usage

```typescript
import { DatastoreAmqpPubSubConfig } from "convoy.js/models";

let value: DatastoreAmqpPubSubConfig = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `host`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `auth`                                                                     | [models.DatastoreAmqpCredentials](../models/datastore-amqp-credentials.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `bindedExchange`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `deadLetterExchange`                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `port`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `queue`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `routingKey`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `schema`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `vhost`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |