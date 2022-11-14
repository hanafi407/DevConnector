<<<<<<< HEAD
import {
  CLEAR_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
} from "../action/types";
=======
import { GET_PROFILE, PROFILE_ERROR } from "../action/types";
>>>>>>> 9d4d706d8c8070400b4a7dbbe9b8eab7bbf8776b

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
<<<<<<< HEAD
    case UPDATE_PROFILE:
=======
>>>>>>> 9d4d706d8c8070400b4a7dbbe9b8eab7bbf8776b
      return {
        ...state,
        profile: payload,
        loading: false,
      };
<<<<<<< HEAD
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
=======
>>>>>>> 9d4d706d8c8070400b4a7dbbe9b8eab7bbf8776b
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
<<<<<<< HEAD
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
=======
>>>>>>> 9d4d706d8c8070400b4a7dbbe9b8eab7bbf8776b
    default:
      return state;
  }
}
