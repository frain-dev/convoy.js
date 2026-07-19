# CreateEndpointRequest

## Example Usage

```typescript
import { CreateEndpointRequest } from "convoy.js/models/operations";

let value: CreateEndpointRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectID`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Project ID                                                            |
| `body`                                                                | [models.ModelsCreateEndpoint](../../models/models-create-endpoint.md) | :heavy_check_mark:                                                    | Endpoint Details                                                      |