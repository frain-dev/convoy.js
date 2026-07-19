# GetFilterRequest

## Example Usage

```typescript
import { GetFilterRequest } from "convoy.js/models/operations";

let value: GetFilterRequest = {
  projectID: "<id>",
  subscriptionID: "<id>",
  filterID: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectID`        | *string*           | :heavy_check_mark: | Project ID         |
| `subscriptionID`   | *string*           | :heavy_check_mark: | Subscription ID    |
| `filterID`         | *string*           | :heavy_check_mark: | Filter ID          |