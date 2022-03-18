import { State, Todo } from '../types';

export function nbClicksSelector(state: State): number {
  return state.counter.nbClicks;
}

export function todosItemsSelector(state: State): Todo[] {
  return state.todos.items;
}

export function todosLoadingSelector(state: State): boolean {
  return state.todos.loading;
}

export function todosNewTodoSelector(state: State): string {
  return state.todos.newTodo;
}
