# CreateBroadcastEventRequest

## Example Usage

```typescript
import { CreateBroadcastEventRequest } from "convoy.js/models/operations";

let value: CreateBroadcastEventRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectID`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Project ID                                                            |
| `body`                                                                | [models.ModelsBroadcastEvent](../../models/models-broadcast-event.md) | :heavy_check_mark:                                                    | Broadcast Event Details                                               |