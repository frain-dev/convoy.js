# ModelsUpdateEventType

## Example Usage

```typescript
import { ModelsUpdateEventType } from "convoy.js/models";

let value: ModelsUpdateEventType = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `category`                                                 | *string*                                                   | :heavy_minus_sign:                                         | Category is a product-specific grouping for the event type |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | Description is used to describe what the event type does   |
| `jsonSchema`                                               | Record<string, *any*>                                      | :heavy_minus_sign:                                         | JSONSchema is the JSON structure of the event type         |