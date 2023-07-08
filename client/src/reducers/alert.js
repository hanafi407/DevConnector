import { SET_ALERT, REMOVE_ALERT } from "../action/types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload]; //payload consists of id, msg and action type. and array because of the upcoming filter function
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
}
