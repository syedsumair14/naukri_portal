import { EMPLOYMENT_UPDATE } from "../Actions/ActionList";

const INIT_STATE = {
  successfulUpdate: false,
};

export const employmentReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMPLOYMENT_UPDATE:
      return {
        ...state,
        successfulUpdate: action.payload,
      };

    default:
      return state;
  }
};
