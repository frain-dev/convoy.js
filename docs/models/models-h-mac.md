# ModelsHMac

## Example Usage

```typescript
import { ModelsHMac } from "convoy.js/models";

let value: ModelsHMac = {
  encoding: "base64",
  hash: "<value>",
  header: "<value>",
  secret: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `encoding`                                                           | [models.DatastoreEncodingType](../models/datastore-encoding-type.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `hash`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `header`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `secret`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |