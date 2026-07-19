# ModelsBroadcastEvent

## Example Usage

```typescript
import { ModelsBroadcastEvent } from "convoy.js/models";

let value: ModelsBroadcastEvent = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `acknowledgedAt`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `customHeaders`                                                                               | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Specifies custom headers you want convoy to add when the event is dispatched to your endpoint |
| `data`                                                                                        | [models.ModelsBroadcastEventData](../models/models-broadcast-event-data.md)                   | :heavy_minus_sign:                                                                            | Data is an arbitrary JSON value that gets sent as the body of the<br/>webhook to the endpoints |
| `eventType`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Event Type is used for filtering and debugging e.g invoice.paid                               |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Specify a key for event deduplication                                                         |