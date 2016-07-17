# redux-simple-logger

Super simple cli logger middleware for redux

## Usage

```sh
npm install --save-dev redux-simple-logger
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
