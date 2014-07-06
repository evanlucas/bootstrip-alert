# bootstrip-alert

[Twitter bootstrap](https://github.com/twbs/bootstrap) alert without jQuery

All credit goes to the devs of bootstrap as this is heavily based on the alert plugin from it

## Install

```bash
$ npm install --save bootstrip-alert
```

## Tests

```bash
$ npm test
```

## Example

```js
var Alert = require('bootstrip-alert')
var $ = require('dom')
var ele = $('.alert')
var alert = new Alert(ele)

alert.on('close.bs.alert', function() {
  console.log('closing...')
})

alert.on('closed.bs.alert', function() {
  console.log('closed')
})

```

## TODO

- Allow for transition support
- Implement using data api

## License MIT

Licensed under the MIT License. For more info, see `LICENSE`
