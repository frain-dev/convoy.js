# Endpoints

## Overview

Endpoint related APIs

### Available Operations

* [getEndpoints](#getendpoints) - List all endpoints
* [createEndpoint](#createendpoint) - Create an endpoint
* [testOAuth2Connection](#testoauth2connection) - Test OAuth2 connection
* [deleteEndpoint](#deleteendpoint) - Delete endpoint
* [getEndpoint](#getendpoint) - Retrieve endpoint
* [updateEndpoint](#updateendpoint) - Update an endpoint
* [activateEndpoint](#activateendpoint) - Activate endpoint
* [expireSecret](#expiresecret) - Roll endpoint secret
* [pauseEndpoint](#pauseendpoint) - Pause endpoint

## getEndpoints

This endpoint fetches an endpoints

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetEndpoints" method="get" path="/v1/projects/{projectID}/endpoints" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.endpoints.getEndpoints({
    projectID: "<id>",
    nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
    ownerId: "01H0JA5MEES38RRK3HTEJC647K",
    perPage: 20,
    prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
    q: "endpoint-1",
    sort: "ASC | DESC",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { endpointsGetEndpoints } from "convoy.js/funcs/endpoints-get-endpoints.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await endpointsGetEndpoints(convoy, {
    projectID: "<id>",
    nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
    ownerId: "01H0JA5MEES38RRK3HTEJC647K",
    perPage: 20,
    prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
    q: "endpoint-1",
    sort: "ASC | DESC",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("endpointsGetEndpoints failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEndpointsRequest](../../models/operations/get-endpoints-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEndpointsResponse](../../models/operations/get-endpoints-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetEndpointsBadRequestError   | 400                                  | application/json                     |
| errors.GetEndpointsUnauthorizedError | 401                                  | application/json                     |
| errors.GetEndpointsNotFoundError     | 404                                  | application/json                     |
| errors.ConvoyDefaultError            | 4XX, 5XX                             | \*/\*                                |

## createEndpoint

This endpoint creates an endpoint

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateEndpoint" method="post" path="/v1/projects/{projectID}/endpoints" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.endpoints.createEndpoint("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { endpointsCreateEndpoint } from "convoy.js/funcs/endpoints-create-endpoint.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await endpointsCreateEndpoint(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("endpointsCreateEndpoint failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsCreateEndpoint](../../models/models-create-endpoint.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | Endpoint Details                                                                                                                                                               |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateEndpointResponse](../../models/operations/create-endpoint-response.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CreateEndpointBadRequestError   | 400                                    | application/json                       |
| errors.CreateEndpointUnauthorizedError | 401                                    | application/json                       |
| errors.CreateEndpointNotFoundError     | 404                                    | application/json                       |
| errors.ConvoyDefaultError              | 4XX, 5XX                               | \*/\*                                  |

## testOAuth2Connection

This endpoint tests the OAuth2 connection by attempting to exchange a token

### Example Usage

<!-- UsageSnippet language="typescript" operationID="TestOAuth2Connection" method="post" path="/v1/projects/{projectID}/endpoints/oauth2/test" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.endpoints.testOAuth2Connection("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { endpointsTestOAuth2Connection } from "convoy.js/funcs/endpoints-test-o-auth2-connection.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await endpointsTestOAuth2Connection(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("endpointsTestOAuth2Connection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsTestOAuth2Request](../../models/models-test-o-auth2-request.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | OAuth2 Configuration                                                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TestOAuth2ConnectionResponse](../../models/operations/test-o-auth2-connection-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.TestOAuth2ConnectionBadRequestError   | 400                                          | application/json                             |
| errors.TestOAuth2ConnectionUnauthorizedError | 401                                          | application/json                             |
| errors.TestOAuth2ConnectionNotFoundError     | 404                                          | application/json                             |
| errors.ConvoyDefaultError                    | 4XX, 5XX                                     | \*/\*                                        |

## deleteEndpoint

This endpoint deletes an endpoint

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeleteEndpoint" method="delete" path="/v1/projects/{projectID}/endpoints/{endpointID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.endpoints.deleteEndpoint("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { endpointsDeleteEndpoint } from "convoy.js/funcs/endpoints-delete-endpoint.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await endpointsDeleteEndpoint(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("endpointsDeleteEndpoint failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `endpointID`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Endpoint ID                                                                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteEndpointResponse](../../models/operations/delete-endpoint-response.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.DeleteEndpointBadRequestError   | 400                                    | application/json                       |
| errors.DeleteEndpointUnauthorizedError | 401                                    | application/json                       |
| errors.DeleteEndpointNotFoundError     | 404                                    | application/json                       |
| errors.ConvoyDefaultError              | 4XX, 5XX                               | \*/\*                                  |

## getEndpoint

This endpoint fetches an endpoint

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetEndpoint" method="get" path="/v1/projects/{projectID}/endpoints/{endpointID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.endpoints.getEndpoint("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { endpointsGetEndpoint } from "convoy.js/funcs/endpoints-get-endpoint.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await endpointsGetEndpoint(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("endpointsGetEndpoint failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `endpointID`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Endpoint ID                                                                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEndpointResponse](../../models/operations/get-endpoint-response.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetEndpointBadRequestError   | 400                                 | application/json                    |
| errors.GetEndpointUnauthorizedError | 401                                 | application/json                    |
| errors.GetEndpointNotFoundError     | 404                                 | application/json                    |
| errors.ConvoyDefaultError           | 4XX, 5XX                            | \*/\*                               |

## updateEndpoint

This endpoint updates an endpoint

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateEndpoint" method="put" path="/v1/projects/{projectID}/endpoints/{endpointID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.endpoints.updateEndpoint("<id>", "<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { endpointsUpdateEndpoint } from "convoy.js/funcs/endpoints-update-endpoint.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await endpointsUpdateEndpoint(convoy, "<id>", "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("endpointsUpdateEndpoint failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `endpointID`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Endpoint ID                                                                                                                                                                    |
| `body`                                                                                                                                                                         | [models.ModelsUpdateEndpoint](../../models/models-update-endpoint.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | Endpoint Details                                                                                                                                                               |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateEndpointResponse](../../models/operations/update-endpoint-response.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.UpdateEndpointBadRequestError   | 400                                    | application/json                       |
| errors.UpdateEndpointUnauthorizedError | 401                                    | application/json                       |
| errors.UpdateEndpointNotFoundError     | 404                                    | application/json                       |
| errors.ConvoyDefaultError              | 4XX, 5XX                               | \*/\*                                  |

## activateEndpoint

Activated an inactive endpoint

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ActivateEndpoint" method="post" path="/v1/projects/{projectID}/endpoints/{endpointID}/activate" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.endpoints.activateEndpoint("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { endpointsActivateEndpoint } from "convoy.js/funcs/endpoints-activate-endpoint.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await endpointsActivateEndpoint(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("endpointsActivateEndpoint failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `endpointID`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Endpoint ID                                                                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ActivateEndpointResponse](../../models/operations/activate-endpoint-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.ActivateEndpointBadRequestError   | 400                                      | application/json                         |
| errors.ActivateEndpointUnauthorizedError | 401                                      | application/json                         |
| errors.ActivateEndpointNotFoundError     | 404                                      | application/json                         |
| errors.ConvoyDefaultError                | 4XX, 5XX                                 | \*/\*                                    |

## expireSecret

This endpoint expires and re-generates the endpoint secret.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ExpireSecret" method="put" path="/v1/projects/{projectID}/endpoints/{endpointID}/expire_secret" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.endpoints.expireSecret("<id>", "<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { endpointsExpireSecret } from "convoy.js/funcs/endpoints-expire-secret.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await endpointsExpireSecret(convoy, "<id>", "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("endpointsExpireSecret failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `endpointID`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Endpoint ID                                                                                                                                                                    |
| `body`                                                                                                                                                                         | [models.ModelsExpireSecret](../../models/models-expire-secret.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | Expire Secret Body Parameters                                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ExpireSecretResponse](../../models/operations/expire-secret-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ExpireSecretBadRequestError   | 400                                  | application/json                     |
| errors.ExpireSecretUnauthorizedError | 401                                  | application/json                     |
| errors.ExpireSecretNotFoundError     | 404                                  | application/json                     |
| errors.ConvoyDefaultError            | 4XX, 5XX                             | \*/\*                                |

## pauseEndpoint

Toggles an endpoint's status between active and paused states

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PauseEndpoint" method="put" path="/v1/projects/{projectID}/endpoints/{endpointID}/pause" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.endpoints.pauseEndpoint("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { endpointsPauseEndpoint } from "convoy.js/funcs/endpoints-pause-endpoint.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await endpointsPauseEndpoint(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("endpointsPauseEndpoint failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `endpointID`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Endpoint ID                                                                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PauseEndpointResponse](../../models/operations/pause-endpoint-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.PauseEndpointBadRequestError   | 400                                   | application/json                      |
| errors.PauseEndpointUnauthorizedError | 401                                   | application/json                      |
| errors.PauseEndpointNotFoundError     | 404                                   | application/json                      |
| errors.ConvoyDefaultError             | 4XX, 5XX                              | \*/\*                                 |