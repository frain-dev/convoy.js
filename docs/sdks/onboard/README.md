# Onboard

## Overview

Onboard related APIs

### Available Operations

* [bulkOnboard](#bulkonboard) - Bulk onboard endpoints with subscriptions

## bulkOnboard

This endpoint accepts a CSV file or JSON body to bulk-create endpoints with subscriptions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BulkOnboard" method="post" path="/v1/projects/{projectID}/onboard" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.onboard.bulkOnboard("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { onboardBulkOnboard } from "convoy.js/funcs/onboard-bulk-onboard.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await onboardBulkOnboard(convoy, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("onboardBulkOnboard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `dryRun`                                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Validate without creating                                                                                                                                                      |
| `body`                                                                                                                                                                         | *ReadableStream<Uint8Array>*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Onboard Details (JSON)                                                                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BulkOnboardResponse](../../models/operations/bulk-onboard-response.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.BulkOnboardBadRequestError   | 400                                 | application/json                    |
| errors.BulkOnboardUnauthorizedError | 401                                 | application/json                    |
| errors.BulkOnboardNotFoundError     | 404                                 | application/json                    |
| errors.ConvoyDefaultError           | 4XX, 5XX                            | \*/\*                               |