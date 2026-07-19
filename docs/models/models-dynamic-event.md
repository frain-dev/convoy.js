# ModelsDynamicEvent

## Example Usage

```typescript
import { ModelsDynamicEvent } from "convoy.js/models";

let value: ModelsDynamicEvent = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `customHeaders`                                                                               | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Specifies custom headers you want convoy to add when the event is dispatched to your endpoint |
| `data`                                                                                        | [models.ModelsDynamicEventData](../models/models-dynamic-event-data.md)                       | :heavy_minus_sign:                                                                            | Data is an arbitrary JSON value that gets sent as the body of the<br/>webhook to the endpoints |
| `eventType`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Event Type is used for filtering and debugging e.g invoice.paid                               |
| `eventTypes`                                                                                  | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | A list of event types for the subscription filter config                                      |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Specify a key for event deduplication                                                         |
| `secret`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Endpoint's webhook secret. If not provided, Convoy autogenerates one for the endpoint.        |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL is the endpoint's URL prefixed with https. non-https urls are currently<br/>not supported. |