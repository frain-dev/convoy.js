# Events

## Overview

Event related APIs

### Available Operations

* [getEventsPaged](#geteventspaged) - List all events
* [createEndpointEvent](#createendpointevent) - Create an event
* [batchReplayEvents](#batchreplayevents) - Batch replay events
* [createBroadcastEvent](#createbroadcastevent) - Create a broadcast event
* [countAffectedEvents](#countaffectedevents) - Count events matching batch replay filters
* [createDynamicEvent](#createdynamicevent) - Dynamic Events
* [createEndpointFanoutEvent](#createendpointfanoutevent) - Fan out an event
* [getEndpointEvent](#getendpointevent) - Retrieve an event
* [replayEndpointEvent](#replayendpointevent) - Replay event

## getEventsPaged

This endpoint fetches app events with pagination

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetEventsPaged" method="get" path="/v1/projects/{projectID}/events" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.events.getEventsPaged({
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
import { eventsGetEventsPaged } from "convoy.js/funcs/events-get-events-paged.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventsGetEventsPaged(convoy, {
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
    console.log("eventsGetEventsPaged failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventsPagedRequest](../../models/operations/get-events-paged-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEventsPagedResponse](../../models/operations/get-events-paged-response.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.GetEventsPagedBadRequestError   | 400                                    | application/json                       |
| errors.GetEventsPagedUnauthorizedError | 401                                    | application/json                       |
| errors.GetEventsPagedNotFoundError     | 404                                    | application/json                       |
| errors.ConvoyDefaultError              | 4XX, 5XX                               | \*/\*                                  |

## createEndpointEvent

This endpoint creates an endpoint event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateEndpointEvent" method="post" path="/v1/projects/{projectID}/events" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.events.createEndpointEvent("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventsCreateEndpointEvent } from "convoy.js/funcs/events-create-endpoint-event.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventsCreateEndpointEvent(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsCreateEndpointEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsCreateEvent](../../models/models-create-event.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | Event Details                                                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateEndpointEventResponse](../../models/operations/create-endpoint-event-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.CreateEndpointEventBadRequestError   | 400                                         | application/json                            |
| errors.CreateEndpointEventUnauthorizedError | 401                                         | application/json                            |
| errors.CreateEndpointEventNotFoundError     | 404                                         | application/json                            |
| errors.ConvoyDefaultError                   | 4XX, 5XX                                    | \*/\*                                       |

## batchReplayEvents

This endpoint replays multiple events at once.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BatchReplayEvents" method="post" path="/v1/projects/{projectID}/events/batchreplay" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.events.batchReplayEvents({
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
import { eventsBatchReplayEvents } from "convoy.js/funcs/events-batch-replay-events.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventsBatchReplayEvents(convoy, {
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
    console.log("eventsBatchReplayEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BatchReplayEventsRequest](../../models/operations/batch-replay-events-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BatchReplayEventsResponse](../../models/operations/batch-replay-events-response.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.BatchReplayEventsBadRequestError   | 400                                       | application/json                          |
| errors.BatchReplayEventsUnauthorizedError | 401                                       | application/json                          |
| errors.BatchReplayEventsNotFoundError     | 404                                       | application/json                          |
| errors.ConvoyDefaultError                 | 4XX, 5XX                                  | \*/\*                                     |

## createBroadcastEvent

This endpoint creates a event that is broadcast to every endpoint whose subscription matches the given event type.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateBroadcastEvent" method="post" path="/v1/projects/{projectID}/events/broadcast" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.events.createBroadcastEvent("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventsCreateBroadcastEvent } from "convoy.js/funcs/events-create-broadcast-event.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventsCreateBroadcastEvent(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsCreateBroadcastEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsBroadcastEvent](../../models/models-broadcast-event.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | Broadcast Event Details                                                                                                                                                        |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateBroadcastEventResponse](../../models/operations/create-broadcast-event-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.CreateBroadcastEventBadRequestError   | 400                                          | application/json                             |
| errors.CreateBroadcastEventUnauthorizedError | 401                                          | application/json                             |
| errors.CreateBroadcastEventNotFoundError     | 404                                          | application/json                             |
| errors.ConvoyDefaultError                    | 4XX, 5XX                                     | \*/\*                                        |

## countAffectedEvents

This endpoint returns how many events would be affected by a batch replay with the given filters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CountAffectedEvents" method="get" path="/v1/projects/{projectID}/events/countbatchreplayevents" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.events.countAffectedEvents({
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
import { eventsCountAffectedEvents } from "convoy.js/funcs/events-count-affected-events.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventsCountAffectedEvents(convoy, {
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
    console.log("eventsCountAffectedEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CountAffectedEventsRequest](../../models/operations/count-affected-events-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CountAffectedEventsResponse](../../models/operations/count-affected-events-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.CountAffectedEventsBadRequestError   | 400                                         | application/json                            |
| errors.CountAffectedEventsUnauthorizedError | 401                                         | application/json                            |
| errors.CountAffectedEventsNotFoundError     | 404                                         | application/json                            |
| errors.ConvoyDefaultError                   | 4XX, 5XX                                    | \*/\*                                       |

## createDynamicEvent

This endpoint does not require creating endpoint and subscriptions ahead of time. Instead, you supply the endpoint and the payload, and Convoy delivers the events

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateDynamicEvent" method="post" path="/v1/projects/{projectID}/events/dynamic" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.events.createDynamicEvent("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventsCreateDynamicEvent } from "convoy.js/funcs/events-create-dynamic-event.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventsCreateDynamicEvent(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsCreateDynamicEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsDynamicEvent](../../models/models-dynamic-event.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | Event Details                                                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateDynamicEventResponse](../../models/operations/create-dynamic-event-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.CreateDynamicEventBadRequestError   | 400                                        | application/json                           |
| errors.CreateDynamicEventUnauthorizedError | 401                                        | application/json                           |
| errors.CreateDynamicEventNotFoundError     | 404                                        | application/json                           |
| errors.ConvoyDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |

## createEndpointFanoutEvent

This endpoint uses the owner_id to fan out an event to multiple endpoints.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateEndpointFanoutEvent" method="post" path="/v1/projects/{projectID}/events/fanout" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.events.createEndpointFanoutEvent("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventsCreateEndpointFanoutEvent } from "convoy.js/funcs/events-create-endpoint-fanout-event.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventsCreateEndpointFanoutEvent(convoy, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsCreateEndpointFanoutEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `body`                                                                                                                                                                         | [models.ModelsFanoutEvent](../../models/models-fanout-event.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | Event Details                                                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateEndpointFanoutEventResponse](../../models/operations/create-endpoint-fanout-event-response.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.CreateEndpointFanoutEventBadRequestError   | 400                                               | application/json                                  |
| errors.CreateEndpointFanoutEventUnauthorizedError | 401                                               | application/json                                  |
| errors.CreateEndpointFanoutEventNotFoundError     | 404                                               | application/json                                  |
| errors.ConvoyDefaultError                         | 4XX, 5XX                                          | \*/\*                                             |

## getEndpointEvent

This endpoint retrieves an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetEndpointEvent" method="get" path="/v1/projects/{projectID}/events/{eventID}" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.events.getEndpointEvent("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventsGetEndpointEvent } from "convoy.js/funcs/events-get-endpoint-event.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventsGetEndpointEvent(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsGetEndpointEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `eventID`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | event id                                                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEndpointEventResponse](../../models/operations/get-endpoint-event-response.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.GetEndpointEventBadRequestError   | 400                                      | application/json                         |
| errors.GetEndpointEventUnauthorizedError | 401                                      | application/json                         |
| errors.GetEndpointEventNotFoundError     | 404                                      | application/json                         |
| errors.ConvoyDefaultError                | 4XX, 5XX                                 | \*/\*                                    |

## replayEndpointEvent

This endpoint replays an event afresh assuming it is a new event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ReplayEndpointEvent" method="put" path="/v1/projects/{projectID}/events/{eventID}/replay" -->
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await convoy.events.replayEndpointEvent("<id>", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConvoyCore } from "convoy.js/core.js";
import { eventsReplayEndpointEvent } from "convoy.js/funcs/events-replay-endpoint-event.js";

// Use `ConvoyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const convoy = new ConvoyCore({
  apiKeyAuth: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await eventsReplayEndpointEvent(convoy, "<id>", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsReplayEndpointEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `projectID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Project ID                                                                                                                                                                     |
| `eventID`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | event id                                                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReplayEndpointEventResponse](../../models/operations/replay-endpoint-event-response.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.ReplayEndpointEventBadRequestError   | 400                                         | application/json                            |
| errors.ReplayEndpointEventUnauthorizedError | 401                                         | application/json                            |
| errors.ReplayEndpointEventNotFoundError     | 404                                         | application/json                            |
| errors.ConvoyDefaultError                   | 4XX, 5XX                                    | \*/\*                                       |