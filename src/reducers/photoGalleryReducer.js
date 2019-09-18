import { GET_USER_SUCCESS } from "../actions/actionTypes";
import { DrawerActions } from "react-navigation";

const initialState = {
  users: []
};

export default function photoGalleryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
}
