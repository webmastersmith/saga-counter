import CountActionTypes from './count.types'

const INITIAL_STATE = {
  count: 0,
}

const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountActionTypes.INCREMENT:
      console.log('reducer increment', action.payload)
      return {
        ...state,
        count: action.payload,
      }
    case CountActionTypes.DECREMENT:
      return {
        ...state,
        count: action.payload,
      }
    default:
      return state
  }
}

export default countReducer
