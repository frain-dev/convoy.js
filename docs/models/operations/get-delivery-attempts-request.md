# GetDeliveryAttemptsRequest

## Example Usage

```typescript
import { GetDeliveryAttemptsRequest } from "convoy.js/models/operations";

let value: GetDeliveryAttemptsRequest = {
  projectID: "<id>",
  eventDeliveryID: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `projectID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Project ID                                                         |
| `eventDeliveryID`                                                  | *string*                                                           | :heavy_check_mark:                                                 | event delivery id                                                  |
| `paginated`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | Return a page of ten attempts and next_cursor                      |
| `before`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Exclusive attempt cursor from next_cursor; requires paginated=true |