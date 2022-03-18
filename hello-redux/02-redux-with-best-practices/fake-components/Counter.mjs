import { increment } from "../store/actions.mjs";
import { nbClicksSelector } from "../store/selectors.mjs";

function Counter(store) {
  let count = 0;

  store.subscribe(() => {
    const nbClicks = nbClicksSelector(store.getState());

    if (nbClicks !== count) {
      console.log('render Counter', nbClicks);
      count = nbClicks;
    }
  });

  return {
    click() {
      store.dispatch(increment(1));
    }
  }
}

export default Counter;
