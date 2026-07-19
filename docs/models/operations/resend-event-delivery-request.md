# ResendEventDeliveryRequest

## Example Usage

```typescript
import { ResendEventDeliveryRequest } from "convoy.js/models/operations";

let value: ResendEventDeliveryRequest = {
  projectID: "<id>",
  eventDeliveryID: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectID`        | *string*           | :heavy_check_mark: | Project ID         |
| `eventDeliveryID`  | *string*           | :heavy_check_mark: | event delivery id  |