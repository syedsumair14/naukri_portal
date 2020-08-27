import axios from "axios";
import { BASE_URL } from "../../utils/NetworkLayer";
import { DISPACTH_TOAST, SAVE_LOGIN_DETAILS } from "./ActionList";

export const registerUser = (body) => async (dispatch) => {
  try {
    let dataToSend = {
      user_role_id: 1,
      name: body.Name,
      email_id: body.email,
      password: body.password,
      mobile_no: body.mobilenumber,
      work_exp_years: body.workExpYear,
      work_exp_month: body.workExpMonth,
      resume: body.resume,
    };

    let formData = new FormData();

    for (let key in dataToSend) {
      formData.append(key, dataToSend[key]);
    }

    let register = await axios.post(`${BASE_URL}user/register`, formData);

    if (register.status === 200) {
      if (register.data.status === 200) {
        dispatch({
          type: DISPACTH_TOAST,
          payload: {
            appearance: "success",
            message: "Successfully Registered",
            notification: true,
          },
        });

        return dispatch({
          type: SAVE_LOGIN_DETAILS,
          payload: {
            userId: register.data.user_id,
            token: register.data.token,
          },
        });
      }

      if (register.data.status === 500) {
        dispatch({
          type: DISPACTH_TOAST,
          payload: {
            appearance: "error",
            message: "Something went wrong",
            notification: true,
          },
        });
      } else throw new Error("Something went wrong");
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    dispatch({
      type: DISPACTH_TOAST,
      payload: {
        appearance: "error",
        message: "Something went wrong",
        notification: true,
      },
    });
  }
};
