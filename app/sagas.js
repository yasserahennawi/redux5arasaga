import { take, call, put, takeEvery, all } from 'redux-saga/effects'
import { addCrushSuccess } from 'actions/addCrush';
// import request from 'superagent-bluebird-promise';

// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }

// function* fetchAll() {
//   const users  = yield call(request.get(`https://ostlerapi.herokuapp.com/api/users`),
//         bookings  = yield call(request.get(`https://ostlerapi.herokuapp.com/api/bookings`)
//   yield put({ type: 'USERS_RECEIVED', users })
//   yield put({ type: 'BOOKINGS_RECEIVED', bookings })
// }
//
// export function* watchFetchAll() {
//   yield takeEvery('USERS_RECEIVED', users)
//   yield takeEvery('BOOKINGS_RECEIVED', bookings)
// }

// setTimeout(callback, 1000);

function mySetTimeout(time) {
  return new Promise( function (res, rej) {
    setTimeout(res, time);
  })
}
//
// mySetTimeout(1000).then(() => {
//   console.log('1000 has finished');
// })


export default function* rootSaga() {
  console.log('hamada');
  yield takeEvery('CRUSH_ADDED', function* () {
    yield mySetTimeout(1000);
    const user = {
      name: 'kareem mohamed',
    };
    yield put(addCrushSuccess(user));
  });


  // yield all([
  //   helloSaga(),
  //   watchFetchAll()
  // ])
};
