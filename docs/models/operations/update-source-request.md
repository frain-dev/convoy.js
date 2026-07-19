# UpdateSourceRequest

## Example Usage

```typescript
import { UpdateSourceRequest } from "convoy.js/models/operations";

let value: UpdateSourceRequest = {
  projectID: "<id>",
  sourceID: "<id>",
  body: {},
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `projectID`                                                       | *string*                                                          | :heavy_check_mark:                                                | Project ID                                                        |
| `sourceID`                                                        | *string*                                                          | :heavy_check_mark:                                                | source id                                                         |
| `body`                                                            | [models.ModelsUpdateSource](../../models/models-update-source.md) | :heavy_check_mark:                                                | Source Details                                                    |