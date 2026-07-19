# GetSubscriptionsRequest

## Example Usage

```typescript
import { GetSubscriptionsRequest } from "convoy.js/models/operations";

let value: GetSubscriptionsRequest = {
  projectID: "<id>",
  nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
  perPage: 20,
  prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
  sort: "ASC | DESC",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `projectID`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | Project ID                                                                                     |                                                                                                |
| `direction`                                                                                    | [operations.GetSubscriptionsDirection](../../models/operations/get-subscriptions-direction.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |                                                                                                |
| `endpointId`                                                                                   | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | A list of endpointIDs to filter by                                                             |                                                                                                |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | Subscription name to filter by                                                                 |                                                                                                |
| `nextPageCursor`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | A pagination cursor to fetch the next page of a list                                           | 01H0JA5MEES38RRK3HTEJC647K                                                                     |
| `perPage`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | The number of items to return per page                                                         | 20                                                                                             |
| `prevPageCursor`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | A pagination cursor to fetch the previous page of a list                                       | 01H0JATTVCXZK8FRDX1M1JN3QY                                                                     |
| `sort`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | Sort order, values are `ASC` or `DESC`, defaults to `DESC`                                     | ASC \| DESC                                                                                    |