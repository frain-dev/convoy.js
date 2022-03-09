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
const { Convoy } = require('convoy');
const convoy = new Convoy({ api_key: 'your_api_key' })
```
The SDK also supports authenticating via Basic Auth by defining your username and password.

```js
const convoy = new Convoy({ username: 'default', password: 'default' })
```

In the event you're using a self hosted convoy instance, you can define the url as part of what is passed into convoy's constructor.

```js
const convoy = new Convoy({ api_key: 'your_api_key', uri: 'self-hosted-instance' })
```

## Usage

```js

//async await
try {
    await convoy.groups.all({ perPage: 10, page: 1 })
} catch(error) {
    console.log(error)
}

//promises
convoy.groups
.all()
.then(res => console.log(res))
.catch(err => console.log(err))
```


## Testing

```bash
npm run test
```

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.


## Credits

- [Frain](https://github.com/frain)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
