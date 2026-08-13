# GetEndpointPeriodFailureRatesRequest

## Example Usage

```typescript
import { GetEndpointPeriodFailureRatesRequest } from "convoy.js/models/operations";

let value: GetEndpointPeriodFailureRatesRequest = {
  projectID: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectID`        | *string*           | :heavy_check_mark: | Project ID         |
| `endpointId`       | *string*[]         | :heavy_minus_sign: | Endpoint IDs       |
| `startDate`        | *string*           | :heavy_minus_sign: | Start date         |
| `endDate`          | *string*           | :heavy_minus_sign: | End date           |