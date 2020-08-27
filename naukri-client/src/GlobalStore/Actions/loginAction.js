import Axios from "axios";
import { BASE_URL } from "../../utils/NetworkLayer";
import { DISPACTH_TOAST, SAVE_LOGIN_DETAILS } from "./ActionList";

export default class localStorageHelper {
  constructor(token, userId) {
    this.token = token;
    this.userId = userId;
  }
  saveData() {
    localStorage.setItem("token", this.token);
    localStorage.setItem("userId", this.userId);
  }
  removeData() {
    localStorage.clear();
  }
}

export const login = (body) => async (dispatch) => {
  try {
    const tryLogin = await Axios.post(BASE_URL + "user/login", body);
    if (tryLogin.status === 200) {
      dispatch({
        type: DISPACTH_TOAST,
        payload: {
          appearance: "success",
          message: "Successfully Registered",
          notification: true,
        },
      });

      dispatch({
        type: SAVE_LOGIN_DETAILS,
        payload: {
          userId: tryLogin.data.user_id,
          token: tryLogin.data.token,
        },
      });
      // let saveUserData = new localStorageHelper(
      //   tryLogin.data.token,
      //   tryLogin.data.user_id
      // );
      // return saveUserData.saveData();
      //   return saveUserData.setDefaultHeaders();
    }
    throw new Error("Something went wrong");
  } catch (error) {
    dispatch({
      type: DISPACTH_TOAST,
      payload: {
        appearance: "error",
        message: error.message,
        notification: true,
      },
    });
  }
};
