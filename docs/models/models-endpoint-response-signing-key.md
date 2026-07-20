# ModelsEndpointResponseSigningKey

Encrypted at rest

## Example Usage

```typescript
import { ModelsEndpointResponseSigningKey } from "convoy.js/models";

let value: ModelsEndpointResponseSigningKey = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `crv`                                                 | *string*                                              | :heavy_minus_sign:                                    | EC (Elliptic Curve) key fields                        |
| `d`                                                   | *string*                                              | :heavy_minus_sign:                                    | Private key (EC only)                                 |
| `dp`                                                  | *string*                                              | :heavy_minus_sign:                                    | RSA first factor CRT exponent (RSA private key only)  |
| `dq`                                                  | *string*                                              | :heavy_minus_sign:                                    | RSA second factor CRT exponent (RSA private key only) |
| `e`                                                   | *string*                                              | :heavy_minus_sign:                                    | RSA public exponent (RSA only)                        |
| `kid`                                                 | *string*                                              | :heavy_minus_sign:                                    | Key ID                                                |
| `kty`                                                 | *string*                                              | :heavy_minus_sign:                                    | Key type: "EC" or "RSA"                               |
| `n`                                                   | *string*                                              | :heavy_minus_sign:                                    | RSA key fields                                        |
| `p`                                                   | *string*                                              | :heavy_minus_sign:                                    | RSA first prime factor (RSA private key only)         |
| `q`                                                   | *string*                                              | :heavy_minus_sign:                                    | RSA second prime factor (RSA private key only)        |
| `qi`                                                  | *string*                                              | :heavy_minus_sign:                                    | RSA first CRT coefficient (RSA private key only)      |
| `x`                                                   | *string*                                              | :heavy_minus_sign:                                    | X coordinate (EC only)                                |
| `y`                                                   | *string*                                              | :heavy_minus_sign:                                    | Y coordinate (EC only)                                |