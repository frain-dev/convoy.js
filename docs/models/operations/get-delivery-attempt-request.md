# GetDeliveryAttemptRequest

## Example Usage

```typescript
import { GetDeliveryAttemptRequest } from "convoy.js/models/operations";

let value: GetDeliveryAttemptRequest = {
  projectID: "<id>",
  eventDeliveryID: "<id>",
  deliveryAttemptID: "<id>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectID`         | *string*            | :heavy_check_mark:  | Project ID          |
| `eventDeliveryID`   | *string*            | :heavy_check_mark:  | event delivery id   |
| `deliveryAttemptID` | *string*            | :heavy_check_mark:  | delivery attempt id |