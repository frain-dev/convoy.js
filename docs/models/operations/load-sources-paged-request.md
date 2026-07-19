# LoadSourcesPagedRequest

## Example Usage

```typescript
import { LoadSourcesPagedRequest } from "convoy.js/models/operations";

let value: LoadSourcesPagedRequest = {
  projectID: "<id>",
  nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
  perPage: 20,
  prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
  provider: "twitter",
  sort: "ASC | DESC",
  type: "http",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `projectID`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | Project ID                                                                                      |                                                                                                 |
| `direction`                                                                                     | [operations.LoadSourcesPagedDirection](../../models/operations/load-sources-paged-direction.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `nextPageCursor`                                                                                | *string*                                                                                        | :heavy_minus_sign:                                                                              | A pagination cursor to fetch the next page of a list                                            | 01H0JA5MEES38RRK3HTEJC647K                                                                      |
| `perPage`                                                                                       | *number*                                                                                        | :heavy_minus_sign:                                                                              | The number of items to return per page                                                          | 20                                                                                              |
| `prevPageCursor`                                                                                | *string*                                                                                        | :heavy_minus_sign:                                                                              | A pagination cursor to fetch the previous page of a list                                        | 01H0JATTVCXZK8FRDX1M1JN3QY                                                                      |
| `provider`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | The custom source provider e.g. twitter, shopify                                                | twitter                                                                                         |
| `sort`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | Sort order, values are `ASC` or `DESC`, defaults to `DESC`                                      | ASC \| DESC                                                                                     |
| `type`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The source type e.g. http, pub_sub                                                              | http                                                                                            |