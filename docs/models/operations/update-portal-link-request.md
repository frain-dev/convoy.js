# UpdatePortalLinkRequest

## Example Usage

```typescript
import { UpdatePortalLinkRequest } from "convoy.js/models/operations";

let value: UpdatePortalLinkRequest = {
  projectID: "<id>",
  portalLinkID: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `projectID`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Project ID                                                                                      |
| `portalLinkID`                                                                                  | *string*                                                                                        | :heavy_check_mark:                                                                              | portal link id                                                                                  |
| `body`                                                                                          | [models.DatastoreUpdatePortalLinkRequest](../../models/datastore-update-portal-link-request.md) | :heavy_check_mark:                                                                              | Portal Link Details                                                                             |