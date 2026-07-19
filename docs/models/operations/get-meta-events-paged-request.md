# GetMetaEventsPagedRequest

## Example Usage

```typescript
import { GetMetaEventsPagedRequest } from "convoy.js/models/operations";

let value: GetMetaEventsPagedRequest = {
  projectID: "<id>",
  endDate: "2008-05-02T15:04:05.000Z",
  nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
  perPage: 20,
  prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
  sort: "ASC | DESC",
  startDate: "2006-01-02T15:04:05.000Z",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `projectID`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Project ID                                                                                           |                                                                                                      |
| `direction`                                                                                          | [operations.GetMetaEventsPagedDirection](../../models/operations/get-meta-events-paged-direction.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `endDate`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The end date                                                                                         | 2008-05-02T15:04:05.000Z                                                                             |
| `nextPageCursor`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A pagination cursor to fetch the next page of a list                                                 | 01H0JA5MEES38RRK3HTEJC647K                                                                           |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The number of items to return per page                                                               | 20                                                                                                   |
| `prevPageCursor`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A pagination cursor to fetch the previous page of a list                                             | 01H0JATTVCXZK8FRDX1M1JN3QY                                                                           |
| `sort`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Sort order, values are `ASC` or `DESC`, defaults to `DESC`                                           | ASC \| DESC                                                                                          |
| `startDate`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The start date                                                                                       | 2006-01-02T15:04:05.000Z                                                                             |