# ModelsVerifierConfig

## Example Usage

```typescript
import { ModelsVerifierConfig } from "convoy.js/models";

let value: ModelsVerifierConfig = {
  type: "api_key",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `apiKey`                                                             | [models.ModelsApiKey](../models/models-api-key.md)                   | :heavy_minus_sign:                                                   | N/A                                                                  |
| `basicAuth`                                                          | [models.ModelsBasicAuth](../models/models-basic-auth.md)             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `hmac`                                                               | [models.ModelsHMac](../models/models-h-mac.md)                       | :heavy_minus_sign:                                                   | N/A                                                                  |
| `type`                                                               | [models.DatastoreVerifierType](../models/datastore-verifier-type.md) | :heavy_check_mark:                                                   | N/A                                                                  |