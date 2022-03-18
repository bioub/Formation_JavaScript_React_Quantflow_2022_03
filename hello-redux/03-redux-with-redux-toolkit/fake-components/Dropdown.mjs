import { setStatus } from "../store/actions.mjs";
import { userStatusSelector } from "../store/selectors.mjs";

function Dropdown(store) {
  let value = null;

  store.subscribe(() => {
    const status = userStatusSelector(store.getState());

    if (value !== status) {
      console.log('render Dropdown', status);
      value = status;
    }
  });

  return {
    click() {
      store.dispatch(setStatus('On vacation'))
    }
  }
}

export default Dropdown;
