# ModelsRetryConfiguration

## Example Usage

```typescript
import { ModelsRetryConfiguration } from "convoy.js/models";

let value: ModelsRetryConfiguration = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Used to specify a valid Go time duration e.g 10s, 1h3m for how long to wait between event delivery retries |
| `intervalSeconds`                                                                                          | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Used to specify a time in seconds for how long to wait between event delivery retries,                     |
| `retryCount`                                                                                               | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Used to specify the max number of retries                                                                  |
| `type`                                                                                                     | [models.DatastoreStrategyProvider](../models/datastore-strategy-provider.md)                               | :heavy_minus_sign:                                                                                         | Retry Strategy type                                                                                        |