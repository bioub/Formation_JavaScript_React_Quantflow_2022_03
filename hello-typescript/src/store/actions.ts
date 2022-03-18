import { createAction, nanoid } from '@reduxjs/toolkit';
import { Todo } from '../types';

export const increment = createAction<number>('INCREMENT');

export const fetchTodos = createAction('FETCH_TODOS');
export const fetchTodosSuccess = createAction<Todo[]>('FETCH_TODOS_SUCCESS');

export const addTodo = createAction('ADD_TODO', (title: string) => ({
  payload: { id: nanoid(), title, completed: false },
}));
export const setNewTodo = createAction<string>('SET_NEW_TODO');

export const deleteTodo = createAction<Todo>('DELETE_TOTO');
export const toggleTodos = createAction<boolean>('TOGGLE_TODOS');
