# ModelsFanoutEvent

## Example Usage

```typescript
import { ModelsFanoutEvent } from "convoy.js/models";

let value: ModelsFanoutEvent = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `customHeaders`                                                                               | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Specifies custom headers you want convoy to add when the event is dispatched to your endpoint |
| `data`                                                                                        | [models.ModelsFanoutEventData](../models/models-fanout-event-data.md)                         | :heavy_minus_sign:                                                                            | Data is an arbitrary JSON value that gets sent as the body of the<br/>webhook to the endpoints |
| `eventType`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Event Type is used for filtering and debugging e.g invoice.paid                               |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Specify a key for event deduplication                                                         |
| `ownerId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Used for fanout, sends this event to all endpoints with this OwnerID.                         |