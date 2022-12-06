# Convoy SDK for JS

This is the Convoy JS SDK. This SDK contains methods for easily interacting with Convoy's API. Below are examples to get you started. For additional examples, please see our official documentation at (https://convoy.readme.io/reference)


## Installation
Install convoy.js with

```bash
npm install convoy.js
```

## Setup Client
Next, require the `convoy` module and setup with your auth credentials.

```js
const { Convoy } = require('convoy.js');
const convoy = new Convoy({ api_key: 'your_api_key', project_id: 'your_project_id' })
```

### Create an Endpoint
An endpoint represents a target URL to receive events.

```js
try {
  const endpointData = {
    name: 'Default Endpoint',
    url: "https://0d87-102-89-2-172.ngrok.io",
    description: "Default Endpoint",
    secret: "endpoint-secret",
    events: ["*"],
  };

  const response = await convoy.endpoints.create(endpointData);
} catch (error) {
  console.log(error);
}
```

### Sending an Event
To send an event, you'll need the `uid` from the endpoint we created earlier.

```js
try {
  const eventData = {
    endpoint_id: endpointId,
    event_type: "payment.success",
    data: {
      event: "payment.success",
      data: {
        status: "Completed",
        description: "Transaction Successful",
        userID: "test_user_id808",
      },
    },
  };

  const response = await convoy.events.create(eventData);
} catch (error) {
  console.log(error);
}
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
