# ModelsCreateFilterRequest

## Example Usage

```typescript
import { ModelsCreateFilterRequest } from "convoy.js/models";

let value: ModelsCreateFilterRequest = {
  eventType: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `body`                                                             | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | Body matching criteria (optional)                                  |
| `enabledAt`                                                        | [models.ModelsOptionalTime](../models/models-optional-time.md)     | :heavy_minus_sign:                                                 | Non-null when this filter is active. Defaults to now when omitted. |
| `eventType`                                                        | *string*                                                           | :heavy_check_mark:                                                 | Type of event this filter applies to (required)                    |
| `headers`                                                          | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | Header matching criteria (optional)                                |
| `path`                                                             | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | Path matching criteria (optional)                                  |
| `query`                                                            | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | Query matching criteria (optional)                                 |