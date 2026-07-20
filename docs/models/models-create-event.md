# ModelsCreateEvent

## Example Usage

```typescript
import { ModelsCreateEvent } from "convoy.js/models";

let value: ModelsCreateEvent = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `appId`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | Deprecated but necessary for backward compatibility.                                             |
| `customHeaders`                                                                                  | Record<string, *string*>                                                                         | :heavy_minus_sign:                                                                               | Specifies custom headers you want convoy to add when the event is dispatched to your endpoint    |
| `data`                                                                                           | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | Data is an arbitrary JSON value that gets sent as the body of the<br/>webhook to the endpoints   |
| `endpointId`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | Specifies the endpoint to send this event to. Required unless the<br/>deprecated app_id is provided. |
| `eventType`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | Event Type is used for filtering and debugging e.g invoice.paid                                  |
| `idempotencyKey`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | Specify a key for event deduplication                                                            |