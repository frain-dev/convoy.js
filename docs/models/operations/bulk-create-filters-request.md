# BulkCreateFiltersRequest

## Example Usage

```typescript
import { BulkCreateFiltersRequest } from "convoy.js/models/operations";

let value: BulkCreateFiltersRequest = {
  projectID: "<id>",
  subscriptionID: "<id>",
  body: [
    {
      eventType: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `projectID`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Project ID                                                                         |
| `subscriptionID`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | Subscription ID                                                                    |
| `body`                                                                             | [models.ModelsCreateFilterRequest](../../models/models-create-filter-request.md)[] | :heavy_check_mark:                                                                 | Filters to create                                                                  |