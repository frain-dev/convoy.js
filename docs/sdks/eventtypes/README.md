# EventTypes

## Overview

Event Types related APIs

### Available Operations

* [getEventTypes](#geteventtypes) - Retrieves a project's event types
* [createEventType](#createeventtype) - Create an event type
* [importOpenApiSpec](#importopenapispec) - Import event types from OpenAPI spec
* [updateEventType](#updateeventtype) - Updates an event type
* [deprecateEventType](#deprecateeventtype) - Deprecates an event type

## getEventTypes

This endpoint fetches the project's event types

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetEventTypes" method="get" path="/v1/projects/{projectID}/event-types" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventTypes.getEventTypes("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventTypesGetEventTypes } from "convoy.js/funcs/event-types-get-event-types.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventTypesGetEventTypes(convoy, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTypesGetEventTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEventTypesResponse](../../models/operations/get-event-types-response.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetEventTypesBadRequestError   | 400                                   | application/json                      |
| errors.GetEventTypesUnauthorizedError | 401                                   | application/json                      |
| errors.GetEventTypesNotFoundError     | 404                                   | application/json                      |
| errors.ConvoyDefaultError             | 4XX, 5XX                              | \*/\*                                 |

## createEventType

This endpoint creates an event type

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateEventType" method="post" path="/v1/projects/{projectID}/event-types" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventTypes.createEventType("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventTypesCreateEventType } from "convoy.js/funcs/event-types-create-event-type.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventTypesCreateEventType(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTypesCreateEventType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsCreateEventType](../../models/models-create-event-type.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Event Type Details                                                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateEventTypeResponse](../../models/operations/create-event-type-response.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.CreateEventTypeBadRequestError   | 400                                     | application/json                        |
| errors.CreateEventTypeUnauthorizedError | 401                                     | application/json                        |
| errors.CreateEventTypeNotFoundError     | 404                                     | application/json                        |
| errors.ConvoyDefaultError               | 4XX, 5XX                                | \*/\*                                   |

## importOpenApiSpec

This endpoint imports event types from an OpenAPI specification

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ImportOpenApiSpec" method="post" path="/v1/projects/{projectID}/event-types/import" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventTypes.importOpenApiSpec("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventTypesImportOpenApiSpec } from "convoy.js/funcs/event-types-import-open-api-spec.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventTypesImportOpenApiSpec(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTypesImportOpenApiSpec failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsImportOpenAPISpec](../../models/models-import-open-api-spec.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | OpenAPI specification                                                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ImportOpenApiSpecResponse](../../models/operations/import-open-api-spec-response.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.ImportOpenApiSpecBadRequestError   | 400                                       | application/json                          |
| errors.ImportOpenApiSpecUnauthorizedError | 401                                       | application/json                          |
| errors.ImportOpenApiSpecNotFoundError     | 404                                       | application/json                          |
| errors.ConvoyDefaultError                 | 4XX, 5XX                                  | \*/\*                                     |

## updateEventType

This endpoint updates an event type

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateEventType" method="put" path="/v1/projects/{projectID}/event-types/{eventTypeId}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventTypes.updateEventType("<id>", "<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventTypesUpdateEventType } from "convoy.js/funcs/event-types-update-event-type.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventTypesUpdateEventType(convoy, "<id>", "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTypesUpdateEventType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `eventTypeId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Event Type ID                                                                                                                                                                  |
| `body`                                                                                                                                                                         | [models.ModelsUpdateEventType](../../models/models-update-event-type.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Event Type Details                                                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateEventTypeResponse](../../models/operations/update-event-type-response.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UpdateEventTypeBadRequestError   | 400                                     | application/json                        |
| errors.UpdateEventTypeUnauthorizedError | 401                                     | application/json                        |
| errors.UpdateEventTypeNotFoundError     | 404                                     | application/json                        |
| errors.ConvoyDefaultError               | 4XX, 5XX                                | \*/\*                                   |

## deprecateEventType

This endpoint deprecates an event type

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeprecateEventType" method="post" path="/v1/projects/{projectID}/event-types/{eventTypeId}/deprecate" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.eventTypes.deprecateEventType("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventTypesDeprecateEventType } from "convoy.js/funcs/event-types-deprecate-event-type.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventTypesDeprecateEventType(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTypesDeprecateEventType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `eventTypeId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Event Type ID                                                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeprecateEventTypeResponse](../../models/operations/deprecate-event-type-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.DeprecateEventTypeBadRequestError   | 400                                        | application/json                           |
| errors.DeprecateEventTypeUnauthorizedError | 401                                        | application/json                           |
| errors.DeprecateEventTypeNotFoundError     | 404                                        | application/json                           |
| errors.ConvoyDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |