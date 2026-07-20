# ModelsEndpointResponseMtlsClientCert

mTLS client certificate configuration

## Example Usage

```typescript
import { ModelsEndpointResponseMtlsClientCert } from "convoy.js/models";

let value: ModelsEndpointResponseMtlsClientCert = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `clientCert`                                    | *string*                                        | :heavy_minus_sign:                              | ClientCert is the client certificate PEM string |
| `clientKey`                                     | *string*                                        | :heavy_minus_sign:                              | ClientKey is the client private key PEM string  |