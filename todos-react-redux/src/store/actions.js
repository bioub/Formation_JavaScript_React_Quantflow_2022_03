import { createAction, nanoid } from '@reduxjs/toolkit';

export const increment = createAction('INCREMENT');

export const fetchTodos = createAction('FETCH_TODOS');
export const fetchTodosSuccess = createAction('FETCH_TODOS_SUCCESS');

export const addTodo = createAction('ADD_TODO', (title) => ({
  payload: { id: nanoid(), title, completed: false },
}));
export const setNewTodo = createAction('SET_NEW_TODO');
