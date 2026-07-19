# ModelsFilterConfiguration

## Example Usage

```typescript
import { ModelsFilterConfiguration } from "convoy.js/models";

let value: ModelsFilterConfiguration = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `eventTypes`                                           | *string*[]                                             | :heavy_minus_sign:                                     | List of event types that the subscription should match |
| `filter`                                               | [models.ModelsFS](../models/models-fs.md)              | :heavy_minus_sign:                                     | Body & Header filters                                  |