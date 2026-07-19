# UpdateProjectRequest

## Example Usage

```typescript
import { UpdateProjectRequest } from "convoy.js/models/operations";

let value: UpdateProjectRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `projectID`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Project ID                                                          |
| `body`                                                              | [models.ModelsUpdateProject](../../models/models-update-project.md) | :heavy_check_mark:                                                  | Project Details                                                     |