import reduxtlk from "@reduxjs/toolkit";
import { increment, setStatus } from './actions.mjs'

const initialState = {
  counter: {
    nbClicks: 0,
  },
  user: {
    status: null,
  },
};

export const counterReducer = reduxtlk.createReducer(initialState.counter, {
  [increment]: (state, action) => {
    // immer js var transformer mon code muable en code immuable
    state.nbClicks += action.payload;
  }
});

export const userReducer = reduxtlk.createReducer(initialState.user, {
  [setStatus]: (state, action) => {
    // immer js var transformer mon code muable en code immuable
    state.status = action.payload;
  }
});

export const reducer = {
  counter: counterReducer,
  user: userReducer,
};
