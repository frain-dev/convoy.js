# CreateDynamicEventRequest

## Example Usage

```typescript
import { CreateDynamicEventRequest } from "convoy.js/models/operations";

let value: CreateDynamicEventRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `projectID`                                                       | *string*                                                          | :heavy_check_mark:                                                | Project ID                                                        |
| `body`                                                            | [models.ModelsDynamicEvent](../../models/models-dynamic-event.md) | :heavy_check_mark:                                                | Event Details                                                     |