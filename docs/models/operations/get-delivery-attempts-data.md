# GetDeliveryAttemptsData

## Example Usage

```typescript
import { GetDeliveryAttemptsData } from "convoy.js/models/operations";

let value: GetDeliveryAttemptsData = {
  content: [],
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `content`                                                                       | [models.DatastoreDeliveryAttempt](../../models/datastore-delivery-attempt.md)[] | :heavy_check_mark:                                                              | N/A                                                                             |
| `nextCursor`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | Pass as before to fetch older attempts. Empty on the last page.                 |