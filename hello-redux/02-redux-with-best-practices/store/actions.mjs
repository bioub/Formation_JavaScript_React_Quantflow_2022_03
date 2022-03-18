// action creator : la fonction qui créé l'action

// {type + payload}
// => FSA : Flux Standard Action
// https://github.com/redux-utilities/flux-standard-action

import { INCREMENT, SET_STATUS } from './constants.mjs';

export function setStatus(status) {
  return { type: SET_STATUS, payload: status };
}

export function increment(step = 1) {
  return { type: INCREMENT, payload: step };
}
