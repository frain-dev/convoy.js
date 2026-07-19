# DatastoreUpdatePortalLinkRequest

## Example Usage

```typescript
import { DatastoreUpdatePortalLinkRequest } from "convoy.js/models";

let value: DatastoreUpdatePortalLinkRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `authType`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `canManageEndpoint`                                                        | *boolean*                                                                  | :heavy_minus_sign:                                                         | Specify whether endpoint management can be done through the Portal Link UI |
| `endpoints`                                                                | *string*[]                                                                 | :heavy_minus_sign:                                                         | Deprecated<br/>IDs of endpoints in this portal link                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Portal Link Name                                                           |
| `ownerId`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | OwnerID, the portal link will inherit all the endpoints with this owner ID |