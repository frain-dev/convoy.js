# UpdateEventTypeRequest

## Example Usage

```typescript
import { UpdateEventTypeRequest } from "convoy.js/models/operations";

let value: UpdateEventTypeRequest = {
  projectID: "<id>",
  eventTypeId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectID`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Project ID                                                               |
| `eventTypeId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Event Type ID                                                            |
| `body`                                                                   | [models.ModelsUpdateEventType](../../models/models-update-event-type.md) | :heavy_check_mark:                                                       | Event Type Details                                                       |