import { setStatus } from "../store/actions.mjs";
import { userStatusSelector } from "../store/selectors.mjs";

function Profile(store) {
  let value = null;
  store.subscribe(() => {
    const status = userStatusSelector(store.getState());

    if (value !== status) {
      console.log('render Profile', status);
      value = status;
    }
  });

  return {
    click() {
      store.dispatch(setStatus('Busy'))
    }
  }
}

export default Profile;
