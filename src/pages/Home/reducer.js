import { produce } from "immer";
import { SET_PERSONAL_INFO, SET_STEP } from "./constant";

export const initialState = {
    userData: {},
    step: 1
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_PERSONAL_INFO:
        draft.userData = action.userData;
        break;
      case SET_STEP:
        draft.step = action.step;
        break;
      default:
        break;
    }
  })

export default homeReducer;