import { combineReducers } from "redux";
import photoGalleryReducer from "./photoGalleryReducer";
import { AsyncStorage } from "react-native";
import { CLEAR_STATE } from "../actions/actionTypes";

const appReducer = combineReducers({
  photoGalleryReducer
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    Object.keys(state).forEach(key => {
      AsyncStorage.clear();
    });
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
