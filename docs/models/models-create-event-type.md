# ModelsCreateEventType

## Example Usage

```typescript
import { ModelsCreateEventType } from "convoy.js/models";

let value: ModelsCreateEventType = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `category`                                                 | *string*                                                   | :heavy_minus_sign:                                         | Category is a product-specific grouping for the event type |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | Description is used to describe what the event type does   |
| `jsonSchema`                                               | Record<string, *any*>                                      | :heavy_minus_sign:                                         | JSONSchema is the JSON structure of the event type         |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Name is the event type name. E.g., invoice.created         |