import CountActionTypes from './count.types'

export const increment = (item) => ({
  type: CountActionTypes.INCREMENT_SAGA,
  payload: item,
})

export const decrement = (item) => ({
  type: CountActionTypes.DECREMENT_SAGA,
  payload: item,
})
