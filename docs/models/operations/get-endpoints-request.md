# GetEndpointsRequest

## Example Usage

```typescript
import { GetEndpointsRequest } from "convoy.js/models/operations";

let value: GetEndpointsRequest = {
  projectID: "<id>",
  nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
  ownerId: "01H0JA5MEES38RRK3HTEJC647K",
  perPage: 20,
  prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
  q: "endpoint-1",
  sort: "ASC | DESC",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `projectID`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | Project ID                                                                             |                                                                                        |
| `direction`                                                                            | [operations.GetEndpointsDirection](../../models/operations/get-endpoints-direction.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `nextPageCursor`                                                                       | *string*                                                                               | :heavy_minus_sign:                                                                     | A pagination cursor to fetch the next page of a list                                   | 01H0JA5MEES38RRK3HTEJC647K                                                             |
| `ownerId`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | The owner ID of the endpoint                                                           | 01H0JA5MEES38RRK3HTEJC647K                                                             |
| `perPage`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of items to return per page                                                 | 20                                                                                     |
| `prevPageCursor`                                                                       | *string*                                                                               | :heavy_minus_sign:                                                                     | A pagination cursor to fetch the previous page of a list                               | 01H0JATTVCXZK8FRDX1M1JN3QY                                                             |
| `q`                                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | The name of the endpoint                                                               | endpoint-1                                                                             |
| `sort`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Sort order, values are `ASC` or `DESC`, defaults to `DESC`                             | ASC \| DESC                                                                            |