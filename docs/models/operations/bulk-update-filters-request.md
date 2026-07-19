# BulkUpdateFiltersRequest

## Example Usage

```typescript
import { BulkUpdateFiltersRequest } from "convoy.js/models/operations";

let value: BulkUpdateFiltersRequest = {
  projectID: "<id>",
  subscriptionID: "<id>",
  body: [
    {
      uid: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `projectID`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | Project ID                                                                                  |
| `subscriptionID`                                                                            | *string*                                                                                    | :heavy_check_mark:                                                                          | Subscription ID                                                                             |
| `body`                                                                                      | [models.ModelsBulkUpdateFilterRequest](../../models/models-bulk-update-filter-request.md)[] | :heavy_check_mark:                                                                          | Filters to update                                                                           |