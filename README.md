# Convoy SDK for JS

This is the Convoy JS SDK. This SDK contains methods for easily interacting with Convoy's API. Below are examples to get you started. You can view the full API Reference [here](https://getconvoy.io/docs/api-reference/welcome)


## Installation
Install convoy.js

```bash
npm install convoy.js
```

## Setup Client
Next, require the `convoy` module and setup with your auth credentials.

```js

// HTTP Client which connects to Convoy Cloud
const { Convoy } = require('convoy.js');
const convoy = new Convoy({ api_key: 'your_api_key', project_id: 'your_project_id' })


// HTTP Client which connects to a self hosted Convoy instance
const { Convoy } = require('convoy.js');
const convoy = new Convoy({ uri: "http://your-host/api/v1", api_key: 'your_api_key', project_id: 'your_project_id' })

// Amazon SQS Client
const { Convoy } = require('convoy.js');
const convoy = new Convoy({ api_key: 'your_api_key', project_id: 'your_project_id', sqsOptions: {} })


// Apache Kafka Client
const { Convoy } = require('convoy.js');
const convoy = new Convoy({ api_key: 'your_api_key', project_id: 'your_project_id', kafkaOptions: {} })
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
const eventData = {
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

const response = await convoy.events.createFanOutEvent(eventData);
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
