# ImportOpenApiSpecRequest

## Example Usage

```typescript
import { ImportOpenApiSpecRequest } from "convoy.js/models/operations";

let value: ImportOpenApiSpecRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectID`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | Project ID                                                                    |
| `body`                                                                        | [models.ModelsImportOpenAPISpec](../../models/models-import-open-api-spec.md) | :heavy_check_mark:                                                            | OpenAPI specification                                                         |