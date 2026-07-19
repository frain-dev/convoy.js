# ExpireSecretRequest

## Example Usage

```typescript
import { ExpireSecretRequest } from "convoy.js/models/operations";

let value: ExpireSecretRequest = {
  projectID: "<id>",
  endpointID: "<id>",
  body: {},
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `projectID`                                                       | *string*                                                          | :heavy_check_mark:                                                | Project ID                                                        |
| `endpointID`                                                      | *string*                                                          | :heavy_check_mark:                                                | Endpoint ID                                                       |
| `body`                                                            | [models.ModelsExpireSecret](../../models/models-expire-secret.md) | :heavy_check_mark:                                                | Expire Secret Body Parameters                                     |