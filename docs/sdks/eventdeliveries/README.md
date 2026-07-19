# EventDeliveries

## Overview

EventDelivery related APIs

### Available Operations

* [getEventDeliveriesPaged](#geteventdeliveriespaged) - List all event deliveries
* [batchRetryEventDelivery](#batchretryeventdelivery) - Batch retry event delivery
* [forceResendEventDeliveries](#forceresendeventdeliveries) - Force retry event delivery
* [getEventDelivery](#geteventdelivery) - Retrieve an event delivery
* [resendEventDelivery](#resendeventdelivery) - Retry event delivery

## getEventDeliveriesPaged

This endpoint retrieves all event deliveries paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetEventDeliveriesPaged" method="get" path="/v1/projects/{projectID}/eventdeliveries" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventDeliveries.getEventDeliveriesPaged({
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
import { eventDeliveriesGetEventDeliveriesPaged } from "convoy.js/funcs/event-deliveries-get-event-deliveries-paged.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventDeliveriesGetEventDeliveriesPaged(convoy, {
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
    console.log("eventDeliveriesGetEventDeliveriesPaged failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventDeliveriesPagedRequest](../../models/operations/get-event-deliveries-paged-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEventDeliveriesPagedResponse](../../models/operations/get-event-deliveries-paged-response.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.GetEventDeliveriesPagedBadRequestError   | 400                                             | application/json                                |
| errors.GetEventDeliveriesPagedUnauthorizedError | 401                                             | application/json                                |
| errors.GetEventDeliveriesPagedNotFoundError     | 404                                             | application/json                                |
| errors.ConvoyDefaultError                       | 4XX, 5XX                                        | \*/\*                                           |

## batchRetryEventDelivery

This endpoint batch retries multiple event deliveries at once.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BatchRetryEventDelivery" method="post" path="/v1/projects/{projectID}/eventdeliveries/batchretry" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventDeliveries.batchRetryEventDelivery({
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
import { eventDeliveriesBatchRetryEventDelivery } from "convoy.js/funcs/event-deliveries-batch-retry-event-delivery.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventDeliveriesBatchRetryEventDelivery(convoy, {
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
    console.log("eventDeliveriesBatchRetryEventDelivery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BatchRetryEventDeliveryRequest](../../models/operations/batch-retry-event-delivery-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BatchRetryEventDeliveryResponse](../../models/operations/batch-retry-event-delivery-response.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.BatchRetryEventDeliveryBadRequestError   | 400                                             | application/json                                |
| errors.BatchRetryEventDeliveryUnauthorizedError | 401                                             | application/json                                |
| errors.BatchRetryEventDeliveryNotFoundError     | 404                                             | application/json                                |
| errors.ConvoyDefaultError                       | 4XX, 5XX                                        | \*/\*                                           |

## forceResendEventDeliveries

This endpoint enables you retry a previously successful event delivery

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ForceResendEventDeliveries" method="post" path="/v1/projects/{projectID}/eventdeliveries/forceresend" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventDeliveries.forceResendEventDeliveries("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventDeliveriesForceResendEventDeliveries } from "convoy.js/funcs/event-deliveries-force-resend-event-deliveries.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventDeliveriesForceResendEventDeliveries(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventDeliveriesForceResendEventDeliveries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsIDs](../../models/models-i-ds.md)                                                                                                                                | :heavy_check_mark:                                                                                                                                                             | event delivery ids                                                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ForceResendEventDeliveriesResponse](../../models/operations/force-resend-event-deliveries-response.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.ForceResendEventDeliveriesBadRequestError   | 400                                                | application/json                                   |
| errors.ForceResendEventDeliveriesUnauthorizedError | 401                                                | application/json                                   |
| errors.ForceResendEventDeliveriesNotFoundError     | 404                                                | application/json                                   |
| errors.ConvoyDefaultError                          | 4XX, 5XX                                           | \*/\*                                              |

## getEventDelivery

This endpoint fetches an event delivery.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetEventDelivery" method="get" path="/v1/projects/{projectID}/eventdeliveries/{eventDeliveryID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventDeliveries.getEventDelivery("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventDeliveriesGetEventDelivery } from "convoy.js/funcs/event-deliveries-get-event-delivery.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventDeliveriesGetEventDelivery(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventDeliveriesGetEventDelivery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `eventDeliveryID`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | event delivery id                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEventDeliveryResponse](../../models/operations/get-event-delivery-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.GetEventDeliveryBadRequestError   | 400                                      | application/json                         |
| errors.GetEventDeliveryUnauthorizedError | 401                                      | application/json                         |
| errors.GetEventDeliveryNotFoundError     | 404                                      | application/json                         |
| errors.ConvoyDefaultError                | 4XX, 5XX                                 | \*/\*                                    |

## resendEventDelivery

This endpoint retries an event delivery.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ResendEventDelivery" method="put" path="/v1/projects/{projectID}/eventdeliveries/{eventDeliveryID}/resend" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventDeliveries.resendEventDelivery("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventDeliveriesResendEventDelivery } from "convoy.js/funcs/event-deliveries-resend-event-delivery.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventDeliveriesResendEventDelivery(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventDeliveriesResendEventDelivery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `eventDeliveryID`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | event delivery id                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResendEventDeliveryResponse](../../models/operations/resend-event-delivery-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.ResendEventDeliveryBadRequestError   | 400                                         | application/json                            |
| errors.ResendEventDeliveryUnauthorizedError | 401                                         | application/json                            |
| errors.ResendEventDeliveryNotFoundError     | 404                                         | application/json                            |
| errors.ConvoyDefaultError                   | 4XX, 5XX                                    | \*/\*                                       |