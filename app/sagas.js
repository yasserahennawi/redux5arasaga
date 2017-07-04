import request from 'superagent-bluebird-promise';
import { take, call, put, takeEvery, all } from 'redux-saga/effects'
import { addCrushSuccess } from 'actions/addCrush';
// import { fetchBookingsSuccess, fetchBookingsFailed } from 'actions/bookings';
import { fetchUsersSuccess, fetchUsersFailed } from 'actions/users';
import 'whatwg-fetch';

export function* helloSaga() {
  console.log('Hello Sagas!')
}

function* fetchUsers() {
  try {
    const api = 'https://ostlerapi.herokuapp.com/api/users';
    const res  = yield call(() => request.get(api))
    // const users  = [
    //   {displayName: "asdjsad"},
    //   {displayName: "sadji"}
    // ]
    // const users = res.json();
    // console.log('sdfsdfsdfsdfs', users);
    yield put(fetchUsersSuccess(res.body))
  }
  catch(error) {
    yield put(fetchUsersFailed(error))
  }
}

function* watchFetchUsers() {
  yield takeEvery('FETCH_USERS', fetchUsers)
}

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


  yield all([
    helloSaga(),
    watchFetchUsers()
  ])
};
