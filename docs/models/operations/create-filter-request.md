# CreateFilterRequest

## Example Usage

```typescript
import { CreateFilterRequest } from "convoy.js/models/operations";

let value: CreateFilterRequest = {
  projectID: "<id>",
  subscriptionID: "<id>",
  body: {
    eventType: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `projectID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Project ID                                                                       |
| `subscriptionID`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | Subscription ID                                                                  |
| `body`                                                                           | [models.ModelsCreateFilterRequest](../../models/models-create-filter-request.md) | :heavy_check_mark:                                                               | Filter to create                                                                 |