# DatastoreMetadata

## Example Usage

```typescript
import { DatastoreMetadata } from "convoy.js/models";

let value: DatastoreMetadata = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | *number*[]                                                                       | :heavy_minus_sign:                                                               | Data to be sent to endpoint.                                                     |
| `intervalSeconds`                                                                | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `maxRetrySeconds`                                                                | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `nextSendTime`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `numTrials`                                                                      | *number*                                                                         | :heavy_minus_sign:                                                               | NumTrials: number of times we have tried to deliver this Event to<br/>an application |
| `raw`                                                                            | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `retryLimit`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `strategy`                                                                       | [models.DatastoreStrategyProvider](../models/datastore-strategy-provider.md)     | :heavy_minus_sign:                                                               | N/A                                                                              |