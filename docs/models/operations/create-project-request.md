# CreateProjectRequest

## Example Usage

```typescript
import { CreateProjectRequest } from "convoy.js/models/operations";

let value: CreateProjectRequest = {
  orgID: "<id>",
  body: {},
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orgID`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Organisation ID                                                     |
| `body`                                                              | [models.ModelsCreateProject](../../models/models-create-project.md) | :heavy_check_mark:                                                  | Project Details                                                     |