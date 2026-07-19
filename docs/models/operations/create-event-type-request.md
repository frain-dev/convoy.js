# CreateEventTypeRequest

## Example Usage

```typescript
import { CreateEventTypeRequest } from "convoy.js/models/operations";

let value: CreateEventTypeRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectID`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Project ID                                                               |
| `body`                                                                   | [models.ModelsCreateEventType](../../models/models-create-event-type.md) | :heavy_check_mark:                                                       | Event Type Details                                                       |