# UpdateFilterRequest

## Example Usage

```typescript
import { UpdateFilterRequest } from "convoy.js/models/operations";

let value: UpdateFilterRequest = {
  projectID: "<id>",
  subscriptionID: "<id>",
  filterID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `projectID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Project ID                                                                       |
| `subscriptionID`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | Subscription ID                                                                  |
| `filterID`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | Filter ID                                                                        |
| `body`                                                                           | [models.ModelsUpdateFilterRequest](../../models/models-update-filter-request.md) | :heavy_check_mark:                                                               | Updated filter                                                                   |