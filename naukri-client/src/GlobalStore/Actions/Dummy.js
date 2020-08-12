import * as ACTIONS from "./ActionList";

const dummyAction = () => (next) =>
  next({ type: ACTIONS.DUMMY, payload: "Its working" });
