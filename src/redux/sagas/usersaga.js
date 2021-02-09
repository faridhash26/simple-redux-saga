import { call, put, takeEvery } from "redux-saga/effects";

const apiurl = "https://jsonplaceholder.typicode.com/users";

function getapi() {
  return fetch(apiurl, {
    method: "GET",
    headers: { "Content-Type": "aplication/json" },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchusers(action) {
  try {
    const users = yield call(getapi);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (e) {
    yield put({ type: "GET_USERS_FAILD", message: e.message });
  }
}

function* usersaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchusers);
}
export default usersaga;
