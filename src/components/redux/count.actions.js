import CountActionTypes from './count.types'

export const increment = () => ({
  type: CountActionTypes.INCREMENT,
})
export const decrement = () => ({
  type: CountActionTypes.DECREMENT,
})
