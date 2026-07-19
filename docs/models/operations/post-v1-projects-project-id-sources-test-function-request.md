# PostV1ProjectsProjectIDSourcesTestFunctionRequest

## Example Usage

```typescript
import { PostV1ProjectsProjectIDSourcesTestFunctionRequest } from "convoy.js/models/operations";

let value: PostV1ProjectsProjectIDSourcesTestFunctionRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `projectID`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Project ID                                                              |
| `body`                                                                  | [models.ModelsFunctionRequest](../../models/models-function-request.md) | :heavy_check_mark:                                                      | Function Details                                                        |