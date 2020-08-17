import { DISPACTH_TOAST } from "./ActionList";

export const ToastAction = (notification) => ({
  type: DISPACTH_TOAST,
  payload: { notification },
});
