# TestFilterRequest

## Example Usage

```typescript
import { TestFilterRequest } from "convoy.js/models/operations";

let value: TestFilterRequest = {
  projectID: "<id>",
  subscriptionID: "<id>",
  eventType: "<value>",
  body: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Project ID                                                                   |
| `subscriptionID`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | Subscription ID                                                              |
| `eventType`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | Event Type                                                                   |
| `body`                                                                       | [models.ModelsTestFilterRequest](../../models/models-test-filter-request.md) | :heavy_check_mark:                                                           | Payload to test                                                              |