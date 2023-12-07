import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = (await axios.post('http://localhost:5000/api/auth/login', user)).data;
    dispatch(loginSuccess(res));
  } catch(err) {
    dispatch(loginFailure());
  }
}