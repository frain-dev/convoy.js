# ModelsCreateProject

## Example Usage

```typescript
import { ModelsCreateProject } from "convoy.js/models";

let value: ModelsCreateProject = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `config`                                                         | [models.ModelsProjectConfig](../models/models-project-config.md) | :heavy_minus_sign:                                               | Project Config                                                   |
| `logoUrl`                                                        | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Project Name                                                     |
| `type`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Project Type, supported values are `outgoing`, `incoming`        |