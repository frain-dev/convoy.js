# Convoy SDK for JS

This is the Convoy JS SDK. This SDK contains methods for easily interacting with Convoy's API. Below are examples to get you started. You can view the full API Reference [here](https://getconvoy.io/docs/api-reference/welcome)


## Installation
Install convoy.js

```bash
npm install convoy.js
```

## Setup Client
Next, require the `convoy` module and set it up with your instance URL, API key, and project ID. Both the API key and project ID are available from your **Project Settings** page.

Your instance URL depends on where your project lives:

- Convoy Cloud (US): `https://us.getconvoy.cloud/api/v1`
- Convoy Cloud (EU): `https://eu.getconvoy.cloud/api/v1`
- Self-hosted: `https://your-instance/api/v1`

```js

// HTTP Client
const { Convoy } = require('convoy.js');
const convoy = new Convoy({ uri: 'https://us.getconvoy.cloud/api/v1', api_key: 'your_api_key', project_id: 'your_project_id' })

// Amazon SQS Client
const { Convoy } = require('convoy.js');
const convoy = new Convoy({ uri: 'https://us.getconvoy.cloud/api/v1', api_key: 'your_api_key', project_id: 'your_project_id', sqs_options: {} })


// Apache Kafka Client
const { Convoy } = require('convoy.js');
const convoy = new Convoy({ uri: 'https://us.getconvoy.cloud/api/v1', api_key: 'your_api_key', project_id: 'your_project_id', kafka_options: {} })
```

### Create an Endpoint
An endpoint represents a target URL to receive events.

```js
const endpointData = {
  name: 'Default Endpoint',
  url: "https://webhook.site/63baf442-bbf7-4d51-97e8-428ade404459",
  description: "Default Endpoint",
  secret: "endpoint-secret",
  events: ["*"]
};

const response = await convoy.endpoints.create(endpointData);
```
Store the Endpoint ID, so you can use it in subsequent requests for creating subscriptions or sending events.

### Creating Subscriptions
```js 
const subscription = await convoy.subscriptions.create({
  endpoint_id: '01HD6PJBQ0WE842PZ3J8SHDC46',
  name: 'Test Subscription',
  type: 'api'
});
```

### Sending an Event
You can send events to Convoy via HTTP or via any supported message broker. See [here](https://www.getconvoy.io/docs/manual/sources#Message%20Brokers) to see the list of supported brokers.

```js
// Send an event to a single endpoint.
const eventData = {
  endpoint_id: endpointId, 
  event_type: "payment.success",
  data: { 
    event: "payment.success",
    data: {
      status: "Completed",
      description: "Transaction Successful",
      userID: "test_user_id808",
    }
  }
};

const response = await convoy.events.create(eventData);

// Fanout an event to multiple endpoints.
const fanoutData = {
  owner_id: "some_unique_key",
  event_type: "payment.success",
  data: {
    event: "payment.success",
    data: {
      status: "Completed",
      description: "Transaction Successful",
      userID: "test_user_id808",
    }
  }
};

const fanoutResponse = await convoy.events.createFanOutEvent(fanoutData);

// Broadcast an event to every endpoint in the project.
const broadcastData = {
  event_type: "payment.success",
  data: {
    status: "Completed",
    description: "Transaction Successful",
  }
};

const broadcastResponse = await convoy.events.createBroadcastEvent(broadcastData);
```

**Note:** The body struct used above is the same used for the message brokers below.

#### SQS
This library depends on [aws-sdk-js-v3](https://github.com/aws/aws-sdk-js-v3) to configure the SQS client.
```js
// Send event to a single endpoint.
const data = await convoy.sqs.writeEvent({
    endpoint_id: '01HCF8X23MWXCEWR3K3HB7KAY8',
    event_type: '*',
    data: {
        event: "payment.success",
        data: {
            status: "Completed",
            description: "Transaction Successful",
            userID: "test_user_id808",
        }
    }
});

// Fanout an event to multiple endpoints.
const data = await convoy.sqs.writeEvent({
    owner_id: 'some_unique_key',
    event_type: '*',
    data: {
        event: "payment.success",
        data: {
            status: "Completed",
            description: "Transaction Successful",
            userID: "test_user_id808",
        }
    }
});
```

#### Kafka
This library depends on [kafkajs](https://github.com/tulios/kafkajs) to configure the Kafka client.
```js
// Send event to a single endpoint.
const data = await convoy.kafka.writeEvent({
  endpoint_id: '01HCF8X23MWXCEWR3K3HB7KAY8',
  event_type: '*',
  data: { 
    event: "payment.success",
    data: {
      status: "Completed", 
      description: "Transaction Successful",
      userID: "test_user_id808",
    }
  }
});

// Fanout an event to multiple endpoints.
const data = await convoy.kafka.writeEvent({
  owner_id: 'some_unique_key',
  event_type: '*',
  data: { 
    event: "payment.success",
    data: {
      status: "Completed",
      description: "Transaction Successful",
      userID: "test_user_id808",
    }
  }
});
```

### Verifying Webhooks
This client supports verifying [simple](https://www.getconvoy.io/docs/manual/signatures#Simple%20signatures) and [advanced](https://www.getconvoy.io/docs/manual/signatures#Advanced%20signatures) webhook signatures.

```js
// verfiy a simple signature
const webhook = new Webhook({
    header: '666060cbe1348bbc7ec98f4e93dda8eaaf11bbf283d6a2dd56e841b2ef12fcd465c846903f709942473e1442604798186746f04848702c44a773f80672de7b21',
    payload: { email: 'test@gmail.com', first_name: 'test', last_name: 'test' },
    secret: '8IX9njirDG',
    hash: 'sha512',
    encoding: 'hex',
});

webhook.verify()

// verfiy an advanced signature
const webhook = new Webhook({
    header: 't=2048976161,v1=afdb90313acfa15a3fc425755ae651a204947710315bb2a90bccaa87fce88998,v1=fLBDCBUiX5iIs0L5zfNq45h23EkX1HAMpFF+2lHrnes=',
    payload: { email: 'test@gmail.com' },
    secret: '8IX9njirDG',
    hash: 'sha256',
    encoding: 'base64',
});

expect(webhook.verify()).toBeTruthy();
```

## Testing

```bash
npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.


## Credits

- [Frain](https://github.com/frain-dev)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Speakeasy-generated API client

The HTTP API client is generated from Convoy OpenAPI via Speakeasy. **Webhook signature verification remains hand-written** (`src/webhook.ts`) and is covered by shared `tests/signature-vectors.json`. See [MIGRATION.md](./MIGRATION.md).

<!-- Start Summary [summary] -->
## Summary

Convoy API Reference: Convoy is a fast and secure webhooks proxy. This document contains datastore's API specification.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Convoy SDK for JS](#convoy-sdk-for-js)
  * [Installation](#installation)
  * [Setup Client](#setup-client)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/frain-dev/convoy.js
```

### PNPM

```bash
pnpm add https://github.com/frain-dev/convoy.js
```

### Bun

```bash
bun add https://github.com/frain-dev/convoy.js
```

### Yarn

```bash
yarn add https://github.com/frain-dev/convoy.js
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.projects.getProjects("<id>");

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      |
| ------------ | ---- | ----------- |
| `apiKeyAuth` | http | HTTP Bearer |

To authenticate with the API the `apiKeyAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.projects.getProjects("<id>");

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [DeliveryAttempts](docs/sdks/deliveryattempts/README.md)

* [getDeliveryAttempts](docs/sdks/deliveryattempts/README.md#getdeliveryattempts) - List delivery attempts
* [getDeliveryAttempt](docs/sdks/deliveryattempts/README.md#getdeliveryattempt) - Retrieve a delivery attempt

### [Endpoints](docs/sdks/endpoints/README.md)

* [getEndpoints](docs/sdks/endpoints/README.md#getendpoints) - List all endpoints
* [createEndpoint](docs/sdks/endpoints/README.md#createendpoint) - Create an endpoint
* [testOAuth2Connection](docs/sdks/endpoints/README.md#testoauth2connection) - Test OAuth2 connection
* [deleteEndpoint](docs/sdks/endpoints/README.md#deleteendpoint) - Delete endpoint
* [getEndpoint](docs/sdks/endpoints/README.md#getendpoint) - Retrieve endpoint
* [updateEndpoint](docs/sdks/endpoints/README.md#updateendpoint) - Update an endpoint
* [activateEndpoint](docs/sdks/endpoints/README.md#activateendpoint) - Activate endpoint
* [expireSecret](docs/sdks/endpoints/README.md#expiresecret) - Roll endpoint secret
* [pauseEndpoint](docs/sdks/endpoints/README.md#pauseendpoint) - Pause endpoint

### [EventDeliveries](docs/sdks/eventdeliveries/README.md)

* [getEventDeliveriesPaged](docs/sdks/eventdeliveries/README.md#geteventdeliveriespaged) - List all event deliveries
* [batchRetryEventDelivery](docs/sdks/eventdeliveries/README.md#batchretryeventdelivery) - Batch retry event delivery
* [forceResendEventDeliveries](docs/sdks/eventdeliveries/README.md#forceresendeventdeliveries) - Force retry event delivery
* [getEventDelivery](docs/sdks/eventdeliveries/README.md#geteventdelivery) - Retrieve an event delivery
* [resendEventDelivery](docs/sdks/eventdeliveries/README.md#resendeventdelivery) - Retry event delivery

### [Events](docs/sdks/events/README.md)

* [getEventsPaged](docs/sdks/events/README.md#geteventspaged) - List all events
* [createEndpointEvent](docs/sdks/events/README.md#createendpointevent) - Create an event
* [batchReplayEvents](docs/sdks/events/README.md#batchreplayevents) - Batch replay events
* [createBroadcastEvent](docs/sdks/events/README.md#createbroadcastevent) - Create a broadcast event
* [countAffectedEvents](docs/sdks/events/README.md#countaffectedevents) - Count events matching batch replay filters
* [createDynamicEvent](docs/sdks/events/README.md#createdynamicevent) - Dynamic Events
* [createEndpointFanoutEvent](docs/sdks/events/README.md#createendpointfanoutevent) - Fan out an event
* [getEndpointEvent](docs/sdks/events/README.md#getendpointevent) - Retrieve an event
* [replayEndpointEvent](docs/sdks/events/README.md#replayendpointevent) - Replay event

### [EventTypes](docs/sdks/eventtypes/README.md)

* [getEventTypes](docs/sdks/eventtypes/README.md#geteventtypes) - Retrieves a project's event types
* [createEventType](docs/sdks/eventtypes/README.md#createeventtype) - Create an event type
* [importOpenApiSpec](docs/sdks/eventtypes/README.md#importopenapispec) - Import event types from OpenAPI spec
* [updateEventType](docs/sdks/eventtypes/README.md#updateeventtype) - Updates an event type
* [deprecateEventType](docs/sdks/eventtypes/README.md#deprecateeventtype) - Deprecates an event type

### [Filters](docs/sdks/filters/README.md)

* [getFilters](docs/sdks/filters/README.md#getfilters) - List all filters
* [createFilter](docs/sdks/filters/README.md#createfilter) - Create a new filter
* [bulkCreateFilters](docs/sdks/filters/README.md#bulkcreatefilters) - Create multiple subscription filters
* [bulkUpdateFilters](docs/sdks/filters/README.md#bulkupdatefilters) - Update multiple subscription filters
* [testFilter](docs/sdks/filters/README.md#testfilter) - Test a filter
* [deleteFilter](docs/sdks/filters/README.md#deletefilter) - Delete a filter
* [getFilter](docs/sdks/filters/README.md#getfilter) - Get a filter
* [updateFilter](docs/sdks/filters/README.md#updatefilter) - Update a filter

### [MetaEvents](docs/sdks/metaevents/README.md)

* [getMetaEventsPaged](docs/sdks/metaevents/README.md#getmetaeventspaged) - List all meta events
* [getMetaEvent](docs/sdks/metaevents/README.md#getmetaevent) - Retrieve a meta event
* [resendMetaEvent](docs/sdks/metaevents/README.md#resendmetaevent) - Retry meta event

### [Onboard](docs/sdks/onboard/README.md)

* [bulkOnboard](docs/sdks/onboard/README.md#bulkonboard) - Bulk onboard endpoints with subscriptions

### [PortalLinks](docs/sdks/portallinks/README.md)

* [loadPortalLinksPaged](docs/sdks/portallinks/README.md#loadportallinkspaged) - List all portal links
* [createPortalLink](docs/sdks/portallinks/README.md#createportallink) - Create a portal link
* [getPortalLink](docs/sdks/portallinks/README.md#getportallink) - Retrieve a portal link
* [updatePortalLink](docs/sdks/portallinks/README.md#updateportallink) - Update a portal link
* [refreshPortalLinkAuthToken](docs/sdks/portallinks/README.md#refreshportallinkauthtoken) - Get a portal link auth token
* [revokePortalLink](docs/sdks/portallinks/README.md#revokeportallink) - Revoke a portal link

### [Projects](docs/sdks/projects/README.md)

* [getProjects](docs/sdks/projects/README.md#getprojects) - List all projects
* [createProject](docs/sdks/projects/README.md#createproject) - Create a project
* [deleteProject](docs/sdks/projects/README.md#deleteproject) - Delete a project
* [getProject](docs/sdks/projects/README.md#getproject) - Retrieve a project
* [updateProject](docs/sdks/projects/README.md#updateproject) - Update a project

### [Sources](docs/sdks/sources/README.md)

* [loadSourcesPaged](docs/sdks/sources/README.md#loadsourcespaged) - List all sources
* [createSource](docs/sdks/sources/README.md#createsource) - Create a source
* [deleteSource](docs/sdks/sources/README.md#deletesource) - Delete a source
* [getSource](docs/sdks/sources/README.md#getsource) - Retrieve a source
* [updateSource](docs/sdks/sources/README.md#updatesource) - Update a source

### [Subscriptions](docs/sdks/subscriptions/README.md)

* [postV1ProjectsProjectIDSourcesTestFunction](docs/sdks/subscriptions/README.md#postv1projectsprojectidsourcestestfunction) - Validate source function
* [getSubscriptions](docs/sdks/subscriptions/README.md#getsubscriptions) - List all subscriptions
* [createSubscription](docs/sdks/subscriptions/README.md#createsubscription) - Create a subscription
* [testSubscriptionFilter](docs/sdks/subscriptions/README.md#testsubscriptionfilter) - Validate subscription filter
* [testSubscriptionFunction](docs/sdks/subscriptions/README.md#testsubscriptionfunction) - Test a subscription function
* [deleteSubscription](docs/sdks/subscriptions/README.md#deletesubscription) - Delete subscription
* [getSubscription](docs/sdks/subscriptions/README.md#getsubscription) - Retrieve a subscription
* [updateSubscription](docs/sdks/subscriptions/README.md#updatesubscription) - Update a subscription
* [toggleSubscriptionStatus](docs/sdks/subscriptions/README.md#togglesubscriptionstatus) - Toggle subscription status

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`deliveryAttemptsGetDeliveryAttempt`](docs/sdks/deliveryattempts/README.md#getdeliveryattempt) - Retrieve a delivery attempt
- [`deliveryAttemptsGetDeliveryAttempts`](docs/sdks/deliveryattempts/README.md#getdeliveryattempts) - List delivery attempts
- [`endpointsActivateEndpoint`](docs/sdks/endpoints/README.md#activateendpoint) - Activate endpoint
- [`endpointsCreateEndpoint`](docs/sdks/endpoints/README.md#createendpoint) - Create an endpoint
- [`endpointsDeleteEndpoint`](docs/sdks/endpoints/README.md#deleteendpoint) - Delete endpoint
- [`endpointsExpireSecret`](docs/sdks/endpoints/README.md#expiresecret) - Roll endpoint secret
- [`endpointsGetEndpoint`](docs/sdks/endpoints/README.md#getendpoint) - Retrieve endpoint
- [`endpointsGetEndpoints`](docs/sdks/endpoints/README.md#getendpoints) - List all endpoints
- [`endpointsPauseEndpoint`](docs/sdks/endpoints/README.md#pauseendpoint) - Pause endpoint
- [`endpointsTestOAuth2Connection`](docs/sdks/endpoints/README.md#testoauth2connection) - Test OAuth2 connection
- [`endpointsUpdateEndpoint`](docs/sdks/endpoints/README.md#updateendpoint) - Update an endpoint
- [`eventDeliveriesBatchRetryEventDelivery`](docs/sdks/eventdeliveries/README.md#batchretryeventdelivery) - Batch retry event delivery
- [`eventDeliveriesForceResendEventDeliveries`](docs/sdks/eventdeliveries/README.md#forceresendeventdeliveries) - Force retry event delivery
- [`eventDeliveriesGetEventDeliveriesPaged`](docs/sdks/eventdeliveries/README.md#geteventdeliveriespaged) - List all event deliveries
- [`eventDeliveriesGetEventDelivery`](docs/sdks/eventdeliveries/README.md#geteventdelivery) - Retrieve an event delivery
- [`eventDeliveriesResendEventDelivery`](docs/sdks/eventdeliveries/README.md#resendeventdelivery) - Retry event delivery
- [`eventsBatchReplayEvents`](docs/sdks/events/README.md#batchreplayevents) - Batch replay events
- [`eventsCountAffectedEvents`](docs/sdks/events/README.md#countaffectedevents) - Count events matching batch replay filters
- [`eventsCreateBroadcastEvent`](docs/sdks/events/README.md#createbroadcastevent) - Create a broadcast event
- [`eventsCreateDynamicEvent`](docs/sdks/events/README.md#createdynamicevent) - Dynamic Events
- [`eventsCreateEndpointEvent`](docs/sdks/events/README.md#createendpointevent) - Create an event
- [`eventsCreateEndpointFanoutEvent`](docs/sdks/events/README.md#createendpointfanoutevent) - Fan out an event
- [`eventsGetEndpointEvent`](docs/sdks/events/README.md#getendpointevent) - Retrieve an event
- [`eventsGetEventsPaged`](docs/sdks/events/README.md#geteventspaged) - List all events
- [`eventsReplayEndpointEvent`](docs/sdks/events/README.md#replayendpointevent) - Replay event
- [`eventTypesCreateEventType`](docs/sdks/eventtypes/README.md#createeventtype) - Create an event type
- [`eventTypesDeprecateEventType`](docs/sdks/eventtypes/README.md#deprecateeventtype) - Deprecates an event type
- [`eventTypesGetEventTypes`](docs/sdks/eventtypes/README.md#geteventtypes) - Retrieves a project's event types
- [`eventTypesImportOpenApiSpec`](docs/sdks/eventtypes/README.md#importopenapispec) - Import event types from OpenAPI spec
- [`eventTypesUpdateEventType`](docs/sdks/eventtypes/README.md#updateeventtype) - Updates an event type
- [`filtersBulkCreateFilters`](docs/sdks/filters/README.md#bulkcreatefilters) - Create multiple subscription filters
- [`filtersBulkUpdateFilters`](docs/sdks/filters/README.md#bulkupdatefilters) - Update multiple subscription filters
- [`filtersCreateFilter`](docs/sdks/filters/README.md#createfilter) - Create a new filter
- [`filtersDeleteFilter`](docs/sdks/filters/README.md#deletefilter) - Delete a filter
- [`filtersGetFilter`](docs/sdks/filters/README.md#getfilter) - Get a filter
- [`filtersGetFilters`](docs/sdks/filters/README.md#getfilters) - List all filters
- [`filtersTestFilter`](docs/sdks/filters/README.md#testfilter) - Test a filter
- [`filtersUpdateFilter`](docs/sdks/filters/README.md#updatefilter) - Update a filter
- [`metaEventsGetMetaEvent`](docs/sdks/metaevents/README.md#getmetaevent) - Retrieve a meta event
- [`metaEventsGetMetaEventsPaged`](docs/sdks/metaevents/README.md#getmetaeventspaged) - List all meta events
- [`metaEventsResendMetaEvent`](docs/sdks/metaevents/README.md#resendmetaevent) - Retry meta event
- [`onboardBulkOnboard`](docs/sdks/onboard/README.md#bulkonboard) - Bulk onboard endpoints with subscriptions
- [`portalLinksCreatePortalLink`](docs/sdks/portallinks/README.md#createportallink) - Create a portal link
- [`portalLinksGetPortalLink`](docs/sdks/portallinks/README.md#getportallink) - Retrieve a portal link
- [`portalLinksLoadPortalLinksPaged`](docs/sdks/portallinks/README.md#loadportallinkspaged) - List all portal links
- [`portalLinksRefreshPortalLinkAuthToken`](docs/sdks/portallinks/README.md#refreshportallinkauthtoken) - Get a portal link auth token
- [`portalLinksRevokePortalLink`](docs/sdks/portallinks/README.md#revokeportallink) - Revoke a portal link
- [`portalLinksUpdatePortalLink`](docs/sdks/portallinks/README.md#updateportallink) - Update a portal link
- [`projectsCreateProject`](docs/sdks/projects/README.md#createproject) - Create a project
- [`projectsDeleteProject`](docs/sdks/projects/README.md#deleteproject) - Delete a project
- [`projectsGetProject`](docs/sdks/projects/README.md#getproject) - Retrieve a project
- [`projectsGetProjects`](docs/sdks/projects/README.md#getprojects) - List all projects
- [`projectsUpdateProject`](docs/sdks/projects/README.md#updateproject) - Update a project
- [`sourcesCreateSource`](docs/sdks/sources/README.md#createsource) - Create a source
- [`sourcesDeleteSource`](docs/sdks/sources/README.md#deletesource) - Delete a source
- [`sourcesGetSource`](docs/sdks/sources/README.md#getsource) - Retrieve a source
- [`sourcesLoadSourcesPaged`](docs/sdks/sources/README.md#loadsourcespaged) - List all sources
- [`sourcesUpdateSource`](docs/sdks/sources/README.md#updatesource) - Update a source
- [`subscriptionsCreateSubscription`](docs/sdks/subscriptions/README.md#createsubscription) - Create a subscription
- [`subscriptionsDeleteSubscription`](docs/sdks/subscriptions/README.md#deletesubscription) - Delete subscription
- [`subscriptionsGetSubscription`](docs/sdks/subscriptions/README.md#getsubscription) - Retrieve a subscription
- [`subscriptionsGetSubscriptions`](docs/sdks/subscriptions/README.md#getsubscriptions) - List all subscriptions
- [`subscriptionsPostV1ProjectsProjectIDSourcesTestFunction`](docs/sdks/subscriptions/README.md#postv1projectsprojectidsourcestestfunction) - Validate source function
- [`subscriptionsTestSubscriptionFilter`](docs/sdks/subscriptions/README.md#testsubscriptionfilter) - Validate subscription filter
- [`subscriptionsTestSubscriptionFunction`](docs/sdks/subscriptions/README.md#testsubscriptionfunction) - Test a subscription function
- [`subscriptionsToggleSubscriptionStatus`](docs/sdks/subscriptions/README.md#togglesubscriptionstatus) - Toggle subscription status
- [`subscriptionsUpdateSubscription`](docs/sdks/subscriptions/README.md#updatesubscription) - Update a subscription

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.projects.getProjects("<id>", {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.projects.getProjects("<id>");

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ConvoyError`](./src/models/errors/convoy-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Convoy } from "convoy.js";
import * as errors from "convoy.js/models/errors";

const convoy = new Convoy({
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await convoy.projects.getProjects("<id>");

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ConvoyError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.GetProjectsBadRequestError) {
        console.log(error.data$.message); // string
        console.log(error.data$.status); // boolean
        console.log(error.data$.data); // { [k: string]: any }
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`ConvoyError`](./src/models/errors/convoy-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (211)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`ConvoyError`](./src/models/errors/convoy-error.ts)**:
* [`GetProjectsBadRequestError`](./src/models/errors/get-projects-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateProjectBadRequestError`](./src/models/errors/create-project-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`DeleteProjectBadRequestError`](./src/models/errors/delete-project-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetProjectBadRequestError`](./src/models/errors/get-project-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`UpdateProjectBadRequestError`](./src/models/errors/update-project-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetEndpointsBadRequestError`](./src/models/errors/get-endpoints-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateEndpointBadRequestError`](./src/models/errors/create-endpoint-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`TestOAuth2ConnectionBadRequestError`](./src/models/errors/test-o-auth2-connection-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`DeleteEndpointBadRequestError`](./src/models/errors/delete-endpoint-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetEndpointBadRequestError`](./src/models/errors/get-endpoint-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`UpdateEndpointBadRequestError`](./src/models/errors/update-endpoint-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`ActivateEndpointBadRequestError`](./src/models/errors/activate-endpoint-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`ExpireSecretBadRequestError`](./src/models/errors/expire-secret-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PauseEndpointBadRequestError`](./src/models/errors/pause-endpoint-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetEventTypesBadRequestError`](./src/models/errors/get-event-types-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateEventTypeBadRequestError`](./src/models/errors/create-event-type-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`ImportOpenApiSpecBadRequestError`](./src/models/errors/import-open-api-spec-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`UpdateEventTypeBadRequestError`](./src/models/errors/update-event-type-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`DeprecateEventTypeBadRequestError`](./src/models/errors/deprecate-event-type-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetEventDeliveriesPagedBadRequestError`](./src/models/errors/get-event-deliveries-paged-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`BatchRetryEventDeliveryBadRequestError`](./src/models/errors/batch-retry-event-delivery-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`ForceResendEventDeliveriesBadRequestError`](./src/models/errors/force-resend-event-deliveries-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetEventDeliveryBadRequestError`](./src/models/errors/get-event-delivery-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`ResendEventDeliveryBadRequestError`](./src/models/errors/resend-event-delivery-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetDeliveryAttemptsBadRequestError`](./src/models/errors/get-delivery-attempts-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetDeliveryAttemptBadRequestError`](./src/models/errors/get-delivery-attempt-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetEventsPagedBadRequestError`](./src/models/errors/get-events-paged-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateEndpointEventBadRequestError`](./src/models/errors/create-endpoint-event-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`BatchReplayEventsBadRequestError`](./src/models/errors/batch-replay-events-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateBroadcastEventBadRequestError`](./src/models/errors/create-broadcast-event-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CountAffectedEventsBadRequestError`](./src/models/errors/count-affected-events-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateDynamicEventBadRequestError`](./src/models/errors/create-dynamic-event-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateEndpointFanoutEventBadRequestError`](./src/models/errors/create-endpoint-fanout-event-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetEndpointEventBadRequestError`](./src/models/errors/get-endpoint-event-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`ReplayEndpointEventBadRequestError`](./src/models/errors/replay-endpoint-event-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetMetaEventsPagedBadRequestError`](./src/models/errors/get-meta-events-paged-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetMetaEventBadRequestError`](./src/models/errors/get-meta-event-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`ResendMetaEventBadRequestError`](./src/models/errors/resend-meta-event-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`BulkOnboardBadRequestError`](./src/models/errors/bulk-onboard-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`LoadPortalLinksPagedBadRequestError`](./src/models/errors/load-portal-links-paged-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreatePortalLinkBadRequestError`](./src/models/errors/create-portal-link-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetPortalLinkBadRequestError`](./src/models/errors/get-portal-link-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`UpdatePortalLinkBadRequestError`](./src/models/errors/update-portal-link-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`RefreshPortalLinkAuthTokenBadRequestError`](./src/models/errors/refresh-portal-link-auth-token-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`RevokePortalLinkBadRequestError`](./src/models/errors/revoke-portal-link-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`LoadSourcesPagedBadRequestError`](./src/models/errors/load-sources-paged-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateSourceBadRequestError`](./src/models/errors/create-source-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`DeleteSourceBadRequestError`](./src/models/errors/delete-source-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetSourceBadRequestError`](./src/models/errors/get-source-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`UpdateSourceBadRequestError`](./src/models/errors/update-source-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`PostV1ProjectsProjectIDSourcesTestFunctionBadRequestError`](./src/models/errors/post-v1-projects-project-id-sources-test-function-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetSubscriptionsBadRequestError`](./src/models/errors/get-subscriptions-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateSubscriptionBadRequestError`](./src/models/errors/create-subscription-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`TestSubscriptionFilterBadRequestError`](./src/models/errors/test-subscription-filter-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`TestSubscriptionFunctionBadRequestError`](./src/models/errors/test-subscription-function-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`DeleteSubscriptionBadRequestError`](./src/models/errors/delete-subscription-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetSubscriptionBadRequestError`](./src/models/errors/get-subscription-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`UpdateSubscriptionBadRequestError`](./src/models/errors/update-subscription-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`ToggleSubscriptionStatusBadRequestError`](./src/models/errors/toggle-subscription-status-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetFiltersBadRequestError`](./src/models/errors/get-filters-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`CreateFilterBadRequestError`](./src/models/errors/create-filter-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`BulkCreateFiltersBadRequestError`](./src/models/errors/bulk-create-filters-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`BulkUpdateFiltersBadRequestError`](./src/models/errors/bulk-update-filters-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`TestFilterBadRequestError`](./src/models/errors/test-filter-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`DeleteFilterBadRequestError`](./src/models/errors/delete-filter-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetFilterBadRequestError`](./src/models/errors/get-filter-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`UpdateFilterBadRequestError`](./src/models/errors/update-filter-bad-request-error.ts): Bad Request. Status code `400`. Applicable to 1 of 67 methods.*
* [`GetProjectsUnauthorizedError`](./src/models/errors/get-projects-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateProjectUnauthorizedError`](./src/models/errors/create-project-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`DeleteProjectUnauthorizedError`](./src/models/errors/delete-project-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetProjectUnauthorizedError`](./src/models/errors/get-project-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`UpdateProjectUnauthorizedError`](./src/models/errors/update-project-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetEndpointsUnauthorizedError`](./src/models/errors/get-endpoints-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateEndpointUnauthorizedError`](./src/models/errors/create-endpoint-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`TestOAuth2ConnectionUnauthorizedError`](./src/models/errors/test-o-auth2-connection-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`DeleteEndpointUnauthorizedError`](./src/models/errors/delete-endpoint-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetEndpointUnauthorizedError`](./src/models/errors/get-endpoint-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`UpdateEndpointUnauthorizedError`](./src/models/errors/update-endpoint-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`ActivateEndpointUnauthorizedError`](./src/models/errors/activate-endpoint-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`ExpireSecretUnauthorizedError`](./src/models/errors/expire-secret-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`PauseEndpointUnauthorizedError`](./src/models/errors/pause-endpoint-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetEventTypesUnauthorizedError`](./src/models/errors/get-event-types-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateEventTypeUnauthorizedError`](./src/models/errors/create-event-type-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`ImportOpenApiSpecUnauthorizedError`](./src/models/errors/import-open-api-spec-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`UpdateEventTypeUnauthorizedError`](./src/models/errors/update-event-type-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`DeprecateEventTypeUnauthorizedError`](./src/models/errors/deprecate-event-type-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetEventDeliveriesPagedUnauthorizedError`](./src/models/errors/get-event-deliveries-paged-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`BatchRetryEventDeliveryUnauthorizedError`](./src/models/errors/batch-retry-event-delivery-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`ForceResendEventDeliveriesUnauthorizedError`](./src/models/errors/force-resend-event-deliveries-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetEventDeliveryUnauthorizedError`](./src/models/errors/get-event-delivery-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`ResendEventDeliveryUnauthorizedError`](./src/models/errors/resend-event-delivery-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetDeliveryAttemptsUnauthorizedError`](./src/models/errors/get-delivery-attempts-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetDeliveryAttemptUnauthorizedError`](./src/models/errors/get-delivery-attempt-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetEventsPagedUnauthorizedError`](./src/models/errors/get-events-paged-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateEndpointEventUnauthorizedError`](./src/models/errors/create-endpoint-event-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`BatchReplayEventsUnauthorizedError`](./src/models/errors/batch-replay-events-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateBroadcastEventUnauthorizedError`](./src/models/errors/create-broadcast-event-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CountAffectedEventsUnauthorizedError`](./src/models/errors/count-affected-events-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateDynamicEventUnauthorizedError`](./src/models/errors/create-dynamic-event-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateEndpointFanoutEventUnauthorizedError`](./src/models/errors/create-endpoint-fanout-event-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetEndpointEventUnauthorizedError`](./src/models/errors/get-endpoint-event-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`ReplayEndpointEventUnauthorizedError`](./src/models/errors/replay-endpoint-event-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetMetaEventsPagedUnauthorizedError`](./src/models/errors/get-meta-events-paged-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetMetaEventUnauthorizedError`](./src/models/errors/get-meta-event-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`ResendMetaEventUnauthorizedError`](./src/models/errors/resend-meta-event-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`BulkOnboardUnauthorizedError`](./src/models/errors/bulk-onboard-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`LoadPortalLinksPagedUnauthorizedError`](./src/models/errors/load-portal-links-paged-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreatePortalLinkUnauthorizedError`](./src/models/errors/create-portal-link-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetPortalLinkUnauthorizedError`](./src/models/errors/get-portal-link-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`UpdatePortalLinkUnauthorizedError`](./src/models/errors/update-portal-link-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`RefreshPortalLinkAuthTokenUnauthorizedError`](./src/models/errors/refresh-portal-link-auth-token-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`RevokePortalLinkUnauthorizedError`](./src/models/errors/revoke-portal-link-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`LoadSourcesPagedUnauthorizedError`](./src/models/errors/load-sources-paged-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateSourceUnauthorizedError`](./src/models/errors/create-source-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`DeleteSourceUnauthorizedError`](./src/models/errors/delete-source-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetSourceUnauthorizedError`](./src/models/errors/get-source-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`UpdateSourceUnauthorizedError`](./src/models/errors/update-source-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`PostV1ProjectsProjectIDSourcesTestFunctionUnauthorizedError`](./src/models/errors/post-v1-projects-project-id-sources-test-function-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetSubscriptionsUnauthorizedError`](./src/models/errors/get-subscriptions-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateSubscriptionUnauthorizedError`](./src/models/errors/create-subscription-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`TestSubscriptionFilterUnauthorizedError`](./src/models/errors/test-subscription-filter-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`TestSubscriptionFunctionUnauthorizedError`](./src/models/errors/test-subscription-function-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`DeleteSubscriptionUnauthorizedError`](./src/models/errors/delete-subscription-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetSubscriptionUnauthorizedError`](./src/models/errors/get-subscription-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`UpdateSubscriptionUnauthorizedError`](./src/models/errors/update-subscription-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`ToggleSubscriptionStatusUnauthorizedError`](./src/models/errors/toggle-subscription-status-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetFiltersUnauthorizedError`](./src/models/errors/get-filters-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`CreateFilterUnauthorizedError`](./src/models/errors/create-filter-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`BulkCreateFiltersUnauthorizedError`](./src/models/errors/bulk-create-filters-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`BulkUpdateFiltersUnauthorizedError`](./src/models/errors/bulk-update-filters-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`TestFilterUnauthorizedError`](./src/models/errors/test-filter-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`DeleteFilterUnauthorizedError`](./src/models/errors/delete-filter-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`GetFilterUnauthorizedError`](./src/models/errors/get-filter-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`UpdateFilterUnauthorizedError`](./src/models/errors/update-filter-unauthorized-error.ts): Unauthorized. Status code `401`. Applicable to 1 of 67 methods.*
* [`PaymentRequiredError`](./src/models/errors/payment-required-error.ts): Payment Required. Status code `402`. Applicable to 1 of 67 methods.*
* [`CreateProjectForbiddenError`](./src/models/errors/create-project-forbidden-error.ts): Forbidden. Status code `403`. Applicable to 1 of 67 methods.*
* [`DeleteProjectForbiddenError`](./src/models/errors/delete-project-forbidden-error.ts): Forbidden. Status code `403`. Applicable to 1 of 67 methods.*
* [`UpdateProjectForbiddenError`](./src/models/errors/update-project-forbidden-error.ts): Forbidden. Status code `403`. Applicable to 1 of 67 methods.*
* [`GetProjectsNotFoundError`](./src/models/errors/get-projects-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateProjectNotFoundError`](./src/models/errors/create-project-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteProjectNotFoundError`](./src/models/errors/delete-project-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetProjectNotFoundError`](./src/models/errors/get-project-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`UpdateProjectNotFoundError`](./src/models/errors/update-project-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetEndpointsNotFoundError`](./src/models/errors/get-endpoints-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateEndpointNotFoundError`](./src/models/errors/create-endpoint-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`TestOAuth2ConnectionNotFoundError`](./src/models/errors/test-o-auth2-connection-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteEndpointNotFoundError`](./src/models/errors/delete-endpoint-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetEndpointNotFoundError`](./src/models/errors/get-endpoint-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`UpdateEndpointNotFoundError`](./src/models/errors/update-endpoint-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`ActivateEndpointNotFoundError`](./src/models/errors/activate-endpoint-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`ExpireSecretNotFoundError`](./src/models/errors/expire-secret-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PauseEndpointNotFoundError`](./src/models/errors/pause-endpoint-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetEventTypesNotFoundError`](./src/models/errors/get-event-types-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateEventTypeNotFoundError`](./src/models/errors/create-event-type-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`ImportOpenApiSpecNotFoundError`](./src/models/errors/import-open-api-spec-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`UpdateEventTypeNotFoundError`](./src/models/errors/update-event-type-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeprecateEventTypeNotFoundError`](./src/models/errors/deprecate-event-type-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetEventDeliveriesPagedNotFoundError`](./src/models/errors/get-event-deliveries-paged-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`BatchRetryEventDeliveryNotFoundError`](./src/models/errors/batch-retry-event-delivery-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`ForceResendEventDeliveriesNotFoundError`](./src/models/errors/force-resend-event-deliveries-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetEventDeliveryNotFoundError`](./src/models/errors/get-event-delivery-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`ResendEventDeliveryNotFoundError`](./src/models/errors/resend-event-delivery-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetDeliveryAttemptsNotFoundError`](./src/models/errors/get-delivery-attempts-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetDeliveryAttemptNotFoundError`](./src/models/errors/get-delivery-attempt-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetEventsPagedNotFoundError`](./src/models/errors/get-events-paged-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateEndpointEventNotFoundError`](./src/models/errors/create-endpoint-event-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`BatchReplayEventsNotFoundError`](./src/models/errors/batch-replay-events-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateBroadcastEventNotFoundError`](./src/models/errors/create-broadcast-event-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CountAffectedEventsNotFoundError`](./src/models/errors/count-affected-events-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateDynamicEventNotFoundError`](./src/models/errors/create-dynamic-event-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateEndpointFanoutEventNotFoundError`](./src/models/errors/create-endpoint-fanout-event-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetEndpointEventNotFoundError`](./src/models/errors/get-endpoint-event-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`ReplayEndpointEventNotFoundError`](./src/models/errors/replay-endpoint-event-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetMetaEventsPagedNotFoundError`](./src/models/errors/get-meta-events-paged-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetMetaEventNotFoundError`](./src/models/errors/get-meta-event-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`ResendMetaEventNotFoundError`](./src/models/errors/resend-meta-event-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`BulkOnboardNotFoundError`](./src/models/errors/bulk-onboard-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`LoadPortalLinksPagedNotFoundError`](./src/models/errors/load-portal-links-paged-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreatePortalLinkNotFoundError`](./src/models/errors/create-portal-link-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetPortalLinkNotFoundError`](./src/models/errors/get-portal-link-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`UpdatePortalLinkNotFoundError`](./src/models/errors/update-portal-link-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`RefreshPortalLinkAuthTokenNotFoundError`](./src/models/errors/refresh-portal-link-auth-token-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`RevokePortalLinkNotFoundError`](./src/models/errors/revoke-portal-link-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`LoadSourcesPagedNotFoundError`](./src/models/errors/load-sources-paged-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateSourceNotFoundError`](./src/models/errors/create-source-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteSourceNotFoundError`](./src/models/errors/delete-source-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetSourceNotFoundError`](./src/models/errors/get-source-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`UpdateSourceNotFoundError`](./src/models/errors/update-source-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`PostV1ProjectsProjectIDSourcesTestFunctionNotFoundError`](./src/models/errors/post-v1-projects-project-id-sources-test-function-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetSubscriptionsNotFoundError`](./src/models/errors/get-subscriptions-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateSubscriptionNotFoundError`](./src/models/errors/create-subscription-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`TestSubscriptionFilterNotFoundError`](./src/models/errors/test-subscription-filter-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`TestSubscriptionFunctionNotFoundError`](./src/models/errors/test-subscription-function-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteSubscriptionNotFoundError`](./src/models/errors/delete-subscription-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetSubscriptionNotFoundError`](./src/models/errors/get-subscription-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`UpdateSubscriptionNotFoundError`](./src/models/errors/update-subscription-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`ToggleSubscriptionStatusNotFoundError`](./src/models/errors/toggle-subscription-status-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetFiltersNotFoundError`](./src/models/errors/get-filters-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`CreateFilterNotFoundError`](./src/models/errors/create-filter-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`BulkCreateFiltersNotFoundError`](./src/models/errors/bulk-create-filters-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`BulkUpdateFiltersNotFoundError`](./src/models/errors/bulk-update-filters-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`TestFilterNotFoundError`](./src/models/errors/test-filter-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`DeleteFilterNotFoundError`](./src/models/errors/delete-filter-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`GetFilterNotFoundError`](./src/models/errors/get-filter-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`UpdateFilterNotFoundError`](./src/models/errors/update-filter-not-found-error.ts): Not Found. Status code `404`. Applicable to 1 of 67 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                           | Description |
| --- | -------------------------------- | ----------- |
| 0   | `https://us.getconvoy.cloud/api` | US Region   |
| 1   | `https://eu.getconvoy.cloud/api` | EU Region   |

#### Example

```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  serverIdx: 0,
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.projects.getProjects("<id>");

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Convoy } from "convoy.js";

const convoy = new Convoy({
  serverURL: "https://eu.getconvoy.cloud/api",
  apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await convoy.projects.getProjects("<id>");

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Convoy } from "convoy.js";
import { ProxyAgent } from "undici";
import { HTTPClient } from "convoy.js/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Convoy({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Convoy } from "convoy.js";

const sdk = new Convoy({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
