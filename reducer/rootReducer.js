import { combineReducers } from "redux";
import validationReducer from "../src/features/Register/validationslice";
import postReducer from "../src/features/Post/addpostslice";

const appReducer = combineReducers({
  validation: validationReducer,
  post: postReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
