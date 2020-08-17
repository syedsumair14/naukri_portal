import { DISPACTH_TOAST } from "../Actions/ActionList";

const INIT_STATE = {
  notification: false,
  appearance: "success",
};

export const notificationsReducer = (state = INIT_STATE, action) => {
  let { type, payload } = action;
  switch (type) {
    case DISPACTH_TOAST:
      return {
        ...state,
        notification: payload.notification,
        appearance: payload.appearance,
        message: payload.message,
      };
    default:
      return state;
  }
};
