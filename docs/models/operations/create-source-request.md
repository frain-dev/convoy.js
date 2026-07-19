# CreateSourceRequest

## Example Usage

```typescript
import { CreateSourceRequest } from "convoy.js/models/operations";

let value: CreateSourceRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `projectID`                                                       | *string*                                                          | :heavy_check_mark:                                                | Project ID                                                        |
| `body`                                                            | [models.ModelsCreateSource](../../models/models-create-source.md) | :heavy_check_mark:                                                | Source Details                                                    |