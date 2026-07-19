# UpdateSubscriptionRequest

## Example Usage

```typescript
import { UpdateSubscriptionRequest } from "convoy.js/models/operations";

let value: UpdateSubscriptionRequest = {
  projectID: "<id>",
  subscriptionID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectID`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | Project ID                                                                    |
| `subscriptionID`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | subscription id                                                               |
| `body`                                                                        | [models.ModelsUpdateSubscription](../../models/models-update-subscription.md) | :heavy_check_mark:                                                            | Subscription Details                                                          |