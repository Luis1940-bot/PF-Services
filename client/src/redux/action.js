import axios from "axios";
import { LOGIN, LOGIN_FAIL, LOG_OUT, LOCAL_HOST } from "./ActionTypes";

export function login(values) {
  return async function (dispatch) {
    const resp = await axios.post(`${LOCAL_HOST}/userdblogin`, values);
    const json = await resp.data;
    console.log(json);
    return dispatch({
      type: LOGIN,
      payload: json,
    });
  };
}
export function logOut() {
  return async function (dispatch) {
    return dispatch({
      type: LOG_OUT,
    });
  };
}
export function signIn(values) {
  return async function (dispatch) {
    const resp = await axios.post(`${LOCAL_HOST}/userdbRegistration`, values);

    // const json = await resp.data;

    return resp;
  };
}
