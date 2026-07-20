# Sources

## Overview

Source related APIs

### Available Operations

* [loadSourcesPaged](#loadsourcespaged) - List all sources
* [createSource](#createsource) - Create a source
* [deleteSource](#deletesource) - Delete a source
* [getSource](#getsource) - Retrieve a source
* [updateSource](#updatesource) - Update a source

## loadSourcesPaged

This endpoint fetches multiple sources

### Example Usage

<!-- UsageSnippet language="typescript" operationID="LoadSourcesPaged" method="get" path="/v1/projects/{projectID}/sources" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.sources.loadSourcesPaged({
    projectID: "<id>",
    nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
    perPage: 20,
    prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
    provider: "twitter",
    sort: "ASC | DESC",
    type: "http",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { sourcesLoadSourcesPaged } from "convoy.js/funcs/sources-load-sources-paged.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await sourcesLoadSourcesPaged(convoy, {
    projectID: "<id>",
    nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
    perPage: 20,
    prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
    provider: "twitter",
    sort: "ASC | DESC",
    type: "http",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesLoadSourcesPaged failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LoadSourcesPagedRequest](../../models/operations/load-sources-paged-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LoadSourcesPagedResponse](../../models/operations/load-sources-paged-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.LoadSourcesPagedBadRequestError   | 400                                      | application/json                         |
| errors.LoadSourcesPagedUnauthorizedError | 401                                      | application/json                         |
| errors.LoadSourcesPagedNotFoundError     | 404                                      | application/json                         |
| errors.ConvoyDefaultError                | 4XX, 5XX                                 | \*/\*                                    |

## createSource

This endpoint creates a source

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateSource" method="post" path="/v1/projects/{projectID}/sources" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.sources.createSource("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { sourcesCreateSource } from "convoy.js/funcs/sources-create-source.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await sourcesCreateSource(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreateSource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsCreateSource](../../models/models-create-source.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | Source Details                                                                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSourceResponse](../../models/operations/create-source-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.CreateSourceBadRequestError   | 400                                  | application/json                     |
| errors.CreateSourceUnauthorizedError | 401                                  | application/json                     |
| errors.CreateSourceNotFoundError     | 404                                  | application/json                     |
| errors.ConvoyDefaultError            | 4XX, 5XX                             | \*/\*                                |

## deleteSource

This endpoint deletes a source

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeleteSource" method="delete" path="/v1/projects/{projectID}/sources/{sourceID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.sources.deleteSource("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { sourcesDeleteSource } from "convoy.js/funcs/sources-delete-source.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await sourcesDeleteSource(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesDeleteSource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `sourceID`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | source id                                                                                                                                                                      |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteSourceResponse](../../models/operations/delete-source-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.DeleteSourceBadRequestError   | 400                                  | application/json                     |
| errors.DeleteSourceUnauthorizedError | 401                                  | application/json                     |
| errors.DeleteSourceNotFoundError     | 404                                  | application/json                     |
| errors.ConvoyDefaultError            | 4XX, 5XX                             | \*/\*                                |

## getSource

This endpoint retrieves a source by its id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetSource" method="get" path="/v1/projects/{projectID}/sources/{sourceID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.sources.getSource("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { sourcesGetSource } from "convoy.js/funcs/sources-get-source.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await sourcesGetSource(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesGetSource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `sourceID`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Source ID                                                                                                                                                                      |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSourceResponse](../../models/operations/get-source-response.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetSourceBadRequestError   | 400                               | application/json                  |
| errors.GetSourceUnauthorizedError | 401                               | application/json                  |
| errors.GetSourceNotFoundError     | 404                               | application/json                  |
| errors.ConvoyDefaultError         | 4XX, 5XX                          | \*/\*                             |

## updateSource

This endpoint updates a source

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateSource" method="put" path="/v1/projects/{projectID}/sources/{sourceID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.sources.updateSource("<id>", "<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { sourcesUpdateSource } from "convoy.js/funcs/sources-update-source.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await sourcesUpdateSource(convoy, "<id>", "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdateSource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `sourceID`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | source id                                                                                                                                                                      |
| `body`                                                                                                                                                                         | [models.ModelsUpdateSource](../../models/models-update-source.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | Source Details                                                                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateSourceResponse](../../models/operations/update-source-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.UpdateSourceBadRequestError   | 400                                  | application/json                     |
| errors.UpdateSourceUnauthorizedError | 401                                  | application/json                     |
| errors.UpdateSourceNotFoundError     | 404                                  | application/json                     |
| errors.ConvoyDefaultError            | 4XX, 5XX                             | \*/\*                                |