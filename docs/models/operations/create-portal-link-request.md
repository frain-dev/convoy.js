# CreatePortalLinkRequest

## Example Usage

```typescript
import { CreatePortalLinkRequest } from "convoy.js/models/operations";

let value: CreatePortalLinkRequest = {
  projectID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `projectID`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Project ID                                                                                      |
| `body`                                                                                          | [models.DatastoreCreatePortalLinkRequest](../../models/datastore-create-portal-link-request.md) | :heavy_check_mark:                                                                              | Portal Link Details                                                                             |