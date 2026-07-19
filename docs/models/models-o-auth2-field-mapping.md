# ModelsOAuth2FieldMapping

## Example Usage

```typescript
import { ModelsOAuth2FieldMapping } from "convoy.js/models";

let value: ModelsOAuth2FieldMapping = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accessToken`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Field name for access token (e.g., "accessToken", "access_token", "token") |
| `expiresIn`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Field name for expiry time (e.g., "expiresIn", "expires_in", "expiresAt")  |
| `tokenType`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Field name for token type (e.g., "tokenType", "token_type")                |