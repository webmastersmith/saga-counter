import { combineReducers } from 'redux'

import countReducer from './count.reducer'

const rootReducer = combineReducers({
  app: countReducer,
})

// state is one big JSON object
export default rootReducer
