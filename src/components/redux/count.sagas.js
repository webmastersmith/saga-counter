import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export function* incrementSaga() {
  yield delay(2000)
  yield put({ type: 'INCREMENT' })
}
export function* decrementSaga() {
  yield delay(1000)
  yield put({ type: 'DECREMENT' })
}

//watch for action increment, decrement
