import { combineReducers } from "redux";
import validationSlice from "../src/features/Register/validationslice";
import postSlice from "../src/features/post/addpostslice";

const appReducer = combineReducers({
  validation: validationSlice,
  posts: postSlice,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
