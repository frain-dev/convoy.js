# PortalLinks

## Overview

Portal Links related APIs

### Available Operations

* [loadPortalLinksPaged](#loadportallinkspaged) - List all portal links
* [createPortalLink](#createportallink) - Create a portal link
* [getPortalLink](#getportallink) - Retrieve a portal link
* [updatePortalLink](#updateportallink) - Update a portal link
* [refreshPortalLinkAuthToken](#refreshportallinkauthtoken) - Get a portal link auth token
* [revokePortalLink](#revokeportallink) - Revoke a portal link

## loadPortalLinksPaged

This endpoint fetches multiple portal links

### Example Usage

<!-- UsageSnippet language="typescript" operationID="LoadPortalLinksPaged" method="get" path="/v1/projects/{projectID}/portal-links" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.portalLinks.loadPortalLinksPaged({
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
import { portalLinksLoadPortalLinksPaged } from "convoy.js/funcs/portal-links-load-portal-links-paged.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await portalLinksLoadPortalLinksPaged(convoy, {
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
    console.log("portalLinksLoadPortalLinksPaged failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LoadPortalLinksPagedRequest](../../models/operations/load-portal-links-paged-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LoadPortalLinksPagedResponse](../../models/operations/load-portal-links-paged-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.LoadPortalLinksPagedBadRequestError   | 400                                          | application/json                             |
| errors.LoadPortalLinksPagedUnauthorizedError | 401                                          | application/json                             |
| errors.LoadPortalLinksPagedNotFoundError     | 404                                          | application/json                             |
| errors.ConvoyDefaultError                    | 4XX, 5XX                                     | \*/\*                                        |

## createPortalLink

This endpoint creates a portal link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreatePortalLink" method="post" path="/v1/projects/{projectID}/portal-links" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.portalLinks.createPortalLink("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { portalLinksCreatePortalLink } from "convoy.js/funcs/portal-links-create-portal-link.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await portalLinksCreatePortalLink(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalLinksCreatePortalLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.DatastoreCreatePortalLinkRequest](../../models/datastore-create-portal-link-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | Portal Link Details                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePortalLinkResponse](../../models/operations/create-portal-link-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.CreatePortalLinkBadRequestError   | 400                                      | application/json                         |
| errors.CreatePortalLinkUnauthorizedError | 401                                      | application/json                         |
| errors.CreatePortalLinkNotFoundError     | 404                                      | application/json                         |
| errors.ConvoyDefaultError                | 4XX, 5XX                                 | \*/\*                                    |

## getPortalLink

This endpoint retrieves a portal link by its id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetPortalLink" method="get" path="/v1/projects/{projectID}/portal-links/{portalLinkID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.portalLinks.getPortalLink("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { portalLinksGetPortalLink } from "convoy.js/funcs/portal-links-get-portal-link.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await portalLinksGetPortalLink(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalLinksGetPortalLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `portalLinkID`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | portal link id                                                                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPortalLinkResponse](../../models/operations/get-portal-link-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetPortalLinkBadRequestError   | 400                                   | application/json                      |
| errors.GetPortalLinkUnauthorizedError | 401                                   | application/json                      |
| errors.GetPortalLinkNotFoundError     | 404                                   | application/json                      |
| errors.ConvoyDefaultError             | 4XX, 5XX                              | \*/\*                                 |

## updatePortalLink

This endpoint updates a portal link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdatePortalLink" method="put" path="/v1/projects/{projectID}/portal-links/{portalLinkID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.portalLinks.updatePortalLink("<id>", "<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { portalLinksUpdatePortalLink } from "convoy.js/funcs/portal-links-update-portal-link.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await portalLinksUpdatePortalLink(convoy, "<id>", "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalLinksUpdatePortalLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `portalLinkID`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | portal link id                                                                                                                                                                 |
| `body`                                                                                                                                                                         | [models.DatastoreUpdatePortalLinkRequest](../../models/datastore-update-portal-link-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | Portal Link Details                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatePortalLinkResponse](../../models/operations/update-portal-link-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.UpdatePortalLinkBadRequestError   | 400                                      | application/json                         |
| errors.UpdatePortalLinkUnauthorizedError | 401                                      | application/json                         |
| errors.UpdatePortalLinkNotFoundError     | 404                                      | application/json                         |
| errors.ConvoyDefaultError                | 4XX, 5XX                                 | \*/\*                                    |

## refreshPortalLinkAuthToken

This endpoint retrieves a portal link auth token

### Example Usage

<!-- UsageSnippet language="typescript" operationID="RefreshPortalLinkAuthToken" method="get" path="/v1/projects/{projectID}/portal-links/{portalLinkID}/refresh_token" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.portalLinks.refreshPortalLinkAuthToken("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { portalLinksRefreshPortalLinkAuthToken } from "convoy.js/funcs/portal-links-refresh-portal-link-auth-token.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await portalLinksRefreshPortalLinkAuthToken(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalLinksRefreshPortalLinkAuthToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `portalLinkID`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | portal link id                                                                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RefreshPortalLinkAuthTokenResponse](../../models/operations/refresh-portal-link-auth-token-response.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.RefreshPortalLinkAuthTokenBadRequestError   | 400                                                | application/json                                   |
| errors.RefreshPortalLinkAuthTokenUnauthorizedError | 401                                                | application/json                                   |
| errors.RefreshPortalLinkAuthTokenNotFoundError     | 404                                                | application/json                                   |
| errors.ConvoyDefaultError                          | 4XX, 5XX                                           | \*/\*                                              |

## revokePortalLink

This endpoint revokes a portal link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="RevokePortalLink" method="put" path="/v1/projects/{projectID}/portal-links/{portalLinkID}/revoke" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.portalLinks.revokePortalLink("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { portalLinksRevokePortalLink } from "convoy.js/funcs/portal-links-revoke-portal-link.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await portalLinksRevokePortalLink(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("portalLinksRevokePortalLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `portalLinkID`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | portal link id                                                                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RevokePortalLinkResponse](../../models/operations/revoke-portal-link-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.RevokePortalLinkBadRequestError   | 400                                      | application/json                         |
| errors.RevokePortalLinkUnauthorizedError | 401                                      | application/json                         |
| errors.RevokePortalLinkNotFoundError     | 404                                      | application/json                         |
| errors.ConvoyDefaultError                | 4XX, 5XX                                 | \*/\*                                    |