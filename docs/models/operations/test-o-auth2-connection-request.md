# TestOAuth2ConnectionRequest

## Example Usage

```typescript
import { TestOAuth2ConnectionRequest } from "convoy.js/models/operations";

let value: TestOAuth2ConnectionRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectID`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | Project ID                                                                    |
| `body`                                                                        | [models.ModelsTestOAuth2Request](../../models/models-test-o-auth2-request.md) | :heavy_check_mark:                                                            | OAuth2 Configuration                                                          |