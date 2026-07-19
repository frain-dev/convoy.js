# TestSubscriptionFunctionRequest

## Example Usage

```typescript
import { TestSubscriptionFunctionRequest } from "convoy.js/models/operations";

let value: TestSubscriptionFunctionRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `projectID`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Project ID                                                              |
| `body`                                                                  | [models.ModelsFunctionRequest](../../models/models-function-request.md) | :heavy_check_mark:                                                      | Function Details                                                        |