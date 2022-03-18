import { createStore } from 'redux';

/*
Pour commencer on gère juste le nbClicks
{
  nbClicks: 0,
}

Un vraie app aurait un state plus complexe
{
  counters: {
    1: {
      nbClicks: 0,
    },
    2: {
      nbClicks: 0,
    }
  }
  todos: {
    items: [],
    newTodo: ''
  }
}
*/

// const nextState = reducer(currentState, action);
// Le reducer doit être une fonction pure
// - la fonction doit etre prédictive
// ex de fonction prédictive : sum(1, 2) = 3
// ex de fonction non prédic : getRandom(0, 100) = ???
// - ne doit pas modifier ses paramètres d'entrées
// (state immuable)
// - ne doit pas avoir de side-effect (API externe, fetch, DOM ou localStorage)
const initialState = {
  nbClicks: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        nbClicks: state.nbClicks + 1,
      };
    default :
      return state;
  }
}

/** @type {import('redux').Store} */
const store = createStore(reducer);

store.subscribe(() => {
  console.log('event emitted');
  console.log('state', store.getState());
});

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'djkhgdjkf' });

// document.dispatchEvent(new Event('delete-todo'))
// document.addEventListener('delete-todo', () => {});
