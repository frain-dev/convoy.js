# ModelsEventDeliveryResponseFieldMapping

Field mapping for flexible token response parsing

## Example Usage

```typescript
import { ModelsEventDeliveryResponseFieldMapping } from "convoy.js/models";

let value: ModelsEventDeliveryResponseFieldMapping = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accessToken`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Field name for access token (e.g., "accessToken", "access_token", "token") |
| `expiresIn`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Field name for expiry time (e.g., "expiresIn", "expires_in", "expiresAt")  |
| `tokenType`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Field name for token type (e.g., "tokenType", "token_type")                |