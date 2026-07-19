# TestSubscriptionFilterRequest

## Example Usage

```typescript
import { TestSubscriptionFilterRequest } from "convoy.js/models/operations";

let value: TestSubscriptionFilterRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `projectID`                                                   | *string*                                                      | :heavy_check_mark:                                            | Project ID                                                    |
| `body`                                                        | [models.ModelsTestFilter](../../models/models-test-filter.md) | :heavy_check_mark:                                            | Filter Details                                                |