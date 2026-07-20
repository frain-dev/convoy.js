# MetaEvents

## Overview

Meta Events related APIs

### Available Operations

* [getMetaEventsPaged](#getmetaeventspaged) - List all meta events
* [getMetaEvent](#getmetaevent) - Retrieve a meta event
* [resendMetaEvent](#resendmetaevent) - Retry meta event

## getMetaEventsPaged

This endpoint fetches meta events with pagination

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetMetaEventsPaged" method="get" path="/v1/projects/{projectID}/meta-events" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.metaEvents.getMetaEventsPaged({
    projectID: "<id>",
    endDate: "2008-05-02T15:04:05.000Z",
    nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
    perPage: 20,
    prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
    sort: "ASC | DESC",
    startDate: "2006-01-02T15:04:05.000Z",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { metaEventsGetMetaEventsPaged } from "convoy.js/funcs/meta-events-get-meta-events-paged.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await metaEventsGetMetaEventsPaged(convoy, {
    projectID: "<id>",
    endDate: "2008-05-02T15:04:05.000Z",
    nextPageCursor: "01H0JA5MEES38RRK3HTEJC647K",
    perPage: 20,
    prevPageCursor: "01H0JATTVCXZK8FRDX1M1JN3QY",
    sort: "ASC | DESC",
    startDate: "2006-01-02T15:04:05.000Z",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metaEventsGetMetaEventsPaged failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMetaEventsPagedRequest](../../models/operations/get-meta-events-paged-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMetaEventsPagedResponse](../../models/operations/get-meta-events-paged-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetMetaEventsPagedBadRequestError   | 400                                        | application/json                           |
| errors.GetMetaEventsPagedUnauthorizedError | 401                                        | application/json                           |
| errors.GetMetaEventsPagedNotFoundError     | 404                                        | application/json                           |
| errors.ConvoyDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |

## getMetaEvent

This endpoint retrieves a meta event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetMetaEvent" method="get" path="/v1/projects/{projectID}/meta-events/{metaEventID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.metaEvents.getMetaEvent("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { metaEventsGetMetaEvent } from "convoy.js/funcs/meta-events-get-meta-event.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await metaEventsGetMetaEvent(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metaEventsGetMetaEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `metaEventID`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | meta event id                                                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMetaEventResponse](../../models/operations/get-meta-event-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetMetaEventBadRequestError   | 400                                  | application/json                     |
| errors.GetMetaEventUnauthorizedError | 401                                  | application/json                     |
| errors.GetMetaEventNotFoundError     | 404                                  | application/json                     |
| errors.ConvoyDefaultError            | 4XX, 5XX                             | \*/\*                                |

## resendMetaEvent

This endpoint retries a meta event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ResendMetaEvent" method="put" path="/v1/projects/{projectID}/meta-events/{metaEventID}/resend" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.metaEvents.resendMetaEvent("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { metaEventsResendMetaEvent } from "convoy.js/funcs/meta-events-resend-meta-event.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await metaEventsResendMetaEvent(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metaEventsResendMetaEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `metaEventID`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | meta event id                                                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResendMetaEventResponse](../../models/operations/resend-meta-event-response.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.ResendMetaEventBadRequestError   | 400                                     | application/json                        |
| errors.ResendMetaEventUnauthorizedError | 401                                     | application/json                        |
| errors.ResendMetaEventNotFoundError     | 404                                     | application/json                        |
| errors.ConvoyDefaultError               | 4XX, 5XX                                | \*/\*                                   |