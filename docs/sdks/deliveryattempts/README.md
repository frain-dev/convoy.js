# DeliveryAttempts

## Overview

Delivery Attempt related APIs

### Available Operations

* [getDeliveryAttempts](#getdeliveryattempts) - List delivery attempts
* [getDeliveryAttempt](#getdeliveryattempt) - Retrieve a delivery attempt

## getDeliveryAttempts

This endpoint fetches an app message's delivery attempts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetDeliveryAttempts" method="get" path="/v1/projects/{projectID}/eventdeliveries/{eventDeliveryID}/deliveryattempts" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.deliveryAttempts.getDeliveryAttempts("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { deliveryAttemptsGetDeliveryAttempts } from "convoy.js/funcs/delivery-attempts-get-delivery-attempts.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await deliveryAttemptsGetDeliveryAttempts(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deliveryAttemptsGetDeliveryAttempts failed:", res.error);
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

**Promise\<[operations.GetDeliveryAttemptsResponse](../../models/operations/get-delivery-attempts-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.GetDeliveryAttemptsBadRequestError   | 400                                         | application/json                            |
| errors.GetDeliveryAttemptsUnauthorizedError | 401                                         | application/json                            |
| errors.GetDeliveryAttemptsNotFoundError     | 404                                         | application/json                            |
| errors.ConvoyDefaultError                   | 4XX, 5XX                                    | \*/\*                                       |

## getDeliveryAttempt

This endpoint fetches an app event delivery attempt

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetDeliveryAttempt" method="get" path="/v1/projects/{projectID}/eventdeliveries/{eventDeliveryID}/deliveryattempts/{deliveryAttemptID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.deliveryAttempts.getDeliveryAttempt("<id>", "<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { deliveryAttemptsGetDeliveryAttempt } from "convoy.js/funcs/delivery-attempts-get-delivery-attempt.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await deliveryAttemptsGetDeliveryAttempt(convoy, "<id>", "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("deliveryAttemptsGetDeliveryAttempt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `eventDeliveryID`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | event delivery id                                                                                                                                                              |
| `deliveryAttemptID`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | delivery attempt id                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetDeliveryAttemptResponse](../../models/operations/get-delivery-attempt-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetDeliveryAttemptBadRequestError   | 400                                        | application/json                           |
| errors.GetDeliveryAttemptUnauthorizedError | 401                                        | application/json                           |
| errors.GetDeliveryAttemptNotFoundError     | 404                                        | application/json                           |
| errors.ConvoyDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |