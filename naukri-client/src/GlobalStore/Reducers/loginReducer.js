import { SAVE_LOGIN_DETAILS } from "../Actions/ActionList";
import localStorageHelper from "../Actions/loginAction";

const INIT_STATE = {
  userId: "",
  token: "",
};

export const saveLogin = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SAVE_LOGIN_DETAILS:
      const helper = new localStorageHelper(
        action.payload.token,
        action.payload.userId
      );
      helper.saveData();

      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
