# CreateSubscriptionRequest

## Example Usage

```typescript
import { CreateSubscriptionRequest } from "convoy.js/models/operations";

let value: CreateSubscriptionRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectID`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | Project ID                                                                    |
| `body`                                                                        | [models.ModelsCreateSubscription](../../models/models-create-subscription.md) | :heavy_check_mark:                                                            | Subscription details                                                          |