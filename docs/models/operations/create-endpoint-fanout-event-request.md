# CreateEndpointFanoutEventRequest

## Example Usage

```typescript
import { CreateEndpointFanoutEventRequest } from "convoy.js/models/operations";

let value: CreateEndpointFanoutEventRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `projectID`                                                     | *string*                                                        | :heavy_check_mark:                                              | Project ID                                                      |
| `body`                                                          | [models.ModelsFanoutEvent](../../models/models-fanout-event.md) | :heavy_check_mark:                                              | Event Details                                                   |