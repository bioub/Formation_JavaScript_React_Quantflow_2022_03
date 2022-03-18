// action creator : la fonction qui créé l'action

// {type + payload}
// => FSA : Flux Standard Action
// https://github.com/redux-utilities/flux-standard-action

import reduxtlk from '@reduxjs/toolkit';

// export function setStatus(status) {
//   return { type: SET_STATUS, payload: status };
// }

// export function increment(step = 1) {
//   return { type: INCREMENT, payload: step };
// }

export const setStatus = reduxtlk.createAction('SET_STATUS');
export const increment = reduxtlk.createAction('INCREMENT');
