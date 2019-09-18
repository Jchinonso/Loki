import axios from "axios";
import * as types from "./actionTypes";
import { addAuthorizationHeader } from "../utils";

export function getUsersRequest() {
  return {
    type: types.GET_USER_REQUEST
  };
}

export function getUsersFailure() {
  return {
    type: types.GET_USER_FAILURE
  };
}

export function getUsersSuccess(users) {
  return {
    type: types.GET_USER_SUCCESS,
    users
  };
}

export function getUsers(user) {
  console.log(user);
  addAuthorizationHeader();
  return dispatch => {
    return axios
      .get(`https://api.unsplash.com/search/users?query=${user}`, {
        headers: { "Content-Type": "application/json", "Accept-Version": "v1" }
      })
      .then(response => {
        dispatch(getUsersSuccess(response.data.results));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
