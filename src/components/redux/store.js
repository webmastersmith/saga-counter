import { createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import { incrementSaga } from './count.sagas'
// can be passed an object with config settings, we don't need to change anything.
const sagaMiddleWare = createSagaMiddleware()

// you can add more functions to middlewares if needed
const middlewares = [sagaMiddleWare]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleWare.run(incrementSaga)

export default store
