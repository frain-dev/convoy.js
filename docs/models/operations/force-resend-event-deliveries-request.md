# ForceResendEventDeliveriesRequest

## Example Usage

```typescript
import { ForceResendEventDeliveriesRequest } from "convoy.js/models/operations";

let value: ForceResendEventDeliveriesRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `projectID`                                     | *string*                                        | :heavy_check_mark:                              | Project ID                                      |
| `body`                                          | [models.ModelsIDs](../../models/models-i-ds.md) | :heavy_check_mark:                              | event delivery ids                              |