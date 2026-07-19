# CreateEndpointEventRequest

## Example Usage

```typescript
import { CreateEndpointEventRequest } from "convoy.js/models/operations";

let value: CreateEndpointEventRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `projectID`                                                     | *string*                                                        | :heavy_check_mark:                                              | Project ID                                                      |
| `body`                                                          | [models.ModelsCreateEvent](../../models/models-create-event.md) | :heavy_check_mark:                                              | Event Details                                                   |