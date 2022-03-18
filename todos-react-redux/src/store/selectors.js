export function nbClicksSelector(state) {
  return state.counter.nbClicks;
}

export function todosItemsSelector(state) {
  return state.todos.items;
}

export function todosLoadingSelector(state) {
  return state.todos.loading;
}

export function todosNewTodoSelector(state) {
  return state.todos.newTodo;
}
