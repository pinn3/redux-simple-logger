# redux-simple-logger

Super simple cli logger middleware for redux

[![npm downloads](https://img.shields.io/npm/dm/redux-simple-logger.svg)](https://www.npmjs.com/package/redux-simple-logger)
[![npm version](https://img.shields.io/npm/v/redux-simple-logger.svg)](https://www.npmjs.com/package/redux-simple-logger)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

```sh
npm install --save redux-simple-logger
```

```js
import logger from 'redux-simple-logger'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
  reducers,
  applyMiddleware(logger)
)
```

## License

[MIT](https://github.com/pinn3/redux-simple-logger/blob/master/LICENSE)
