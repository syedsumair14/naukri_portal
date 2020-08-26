import Axios from "axios";
import { BASE_URL } from "../../utils/NetworkLayer";
import { DISPACTH_TOAST } from "./ActionList";

class localStorageHelper {
  constructor(token, userId) {
    this.token = token;
    this.userId = userId;
  }
  saveData() {
    localStorage.setItem("token", this.token);
    localStorage.setItem("userId", this.userId);
  }
  //   setDefaultHeaders() {
  //     Axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
  //   }
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
      let saveUserData = new localStorageHelper(
        tryLogin.data.token,
        tryLogin.data.user_id
      );
      return saveUserData.saveData();
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
