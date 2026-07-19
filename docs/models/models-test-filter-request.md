# ModelsTestFilterRequest

## Example Usage

```typescript
import { ModelsTestFilterRequest } from "convoy.js/models";

let value: ModelsTestFilterRequest = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `payload`                                                                                    | *any*                                                                                        | :heavy_minus_sign:                                                                           | Sample payload to test against body filter rules. Optional when request scopes are supplied. |
| `request`                                                                                    | [models.ModelsTestFilterRequestScopes](../models/models-test-filter-request-scopes.md)       | :heavy_minus_sign:                                                                           | Request scopes to test against the filter.                                                   |