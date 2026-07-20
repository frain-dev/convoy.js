# BulkOnboardRequest

## Example Usage

```typescript
import { BulkOnboardRequest } from "convoy.js/models/operations";

let value: BulkOnboardRequest = {
  projectID: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectID`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Project ID                                                                     |
| `dryRun`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | Validate without creating                                                      |
| `body`                                                                         | [models.ModelsBulkOnboardRequest](../../models/models-bulk-onboard-request.md) | :heavy_minus_sign:                                                             | Onboard Details (JSON)                                                         |