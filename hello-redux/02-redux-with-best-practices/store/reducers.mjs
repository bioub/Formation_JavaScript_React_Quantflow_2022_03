import { combineReducers } from "redux";
import { INCREMENT, SET_STATUS } from "./constants.mjs";

const initialState = {
  counter: {
    nbClicks: 0,
  },
  user: {
    status: null,
  },
};

export function counterReducer(state = initialState.counter, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        nbClicks: state.nbClicks + action.payload,
      };
    default:
      return state;
  }
}

export function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});
