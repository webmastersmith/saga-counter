import { put, takeLatest, all } from 'redux-saga/effects'
import CountActionTypes from './count.types'

// const delay = (ms) => new Promise((res) => setTimeout(res, ms))

function* incrementSaga(action) {
  // yield delay(2000)
  const count = action.payload
  yield put({ type: CountActionTypes.INCREMENT, payload: count + 1 })
}
function* decrementSaga(action) {
  // yield delay(3000)
  const count = action.payload
  yield put({ type: CountActionTypes.DECREMENT, payload: count - 1 })
}

//watch for action increment, decrement
function* watcherSagaIncrement() {
  yield takeLatest(CountActionTypes.INCREMENT_SAGA, incrementSaga)
}
function* watcherSagaDecrement() {
  yield takeLatest(CountActionTypes.DECREMENT_SAGA, decrementSaga)
}

export default function* rootSaga() {
  yield all([watcherSagaIncrement(), watcherSagaDecrement()])
}
