# UpdateEndpointRequest

## Example Usage

```typescript
import { UpdateEndpointRequest } from "convoy.js/models/operations";

let value: UpdateEndpointRequest = {
  projectID: "<id>",
  endpointID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectID`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Project ID                                                            |
| `endpointID`                                                          | *string*                                                              | :heavy_check_mark:                                                    | Endpoint ID                                                           |
| `body`                                                                | [models.ModelsUpdateEndpoint](../../models/models-update-endpoint.md) | :heavy_check_mark:                                                    | Endpoint Details                                                      |