import { DUMMY } from "../Actions/ActionList";

const INIT_STATE = { value: "none" };

export const dummyReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case DUMMY:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
