import { createReducer } from '@reduxjs/toolkit';
import { CounterState, State, TodosState } from '../types';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  fetchTodosSuccess,
  increment,
  setNewTodo,
  toggleTodos,
} from './actions';

const initialState: State = {
  counter: {
    nbClicks: 0,
  },
  todos: {
    loading: false,
    newTodo: '',
    items: [
      { id: Math.random(), title: 'ABC', completed: false },
      { id: Math.random(), title: 'DEF', completed: true },
      { id: Math.random(), title: 'GHI', completed: false },
    ],
  },
};

export const counterReducer = createReducer<CounterState>(initialState.counter, {
  [increment.type]: (state, action) => {
    state.nbClicks += action.payload;
  },
});

export const todosReducer = createReducer<TodosState>(initialState.todos, {
  [setNewTodo.type]: (state, action) => {
    state.newTodo = action.payload;
  },
  [addTodo.type]: (state, action) => {
    state.items.unshift(action.payload);
  },
  [fetchTodos.type]: (state, action) => {
    state.loading = true;
  },
  [fetchTodosSuccess.type]: (state, action) => {
    state.loading = false;
    state.items = [...state.items, ...action.payload];
  },
  [toggleTodos.type]: (state, action) => {
    state.items = state.items.map((t) => ({ ...t, completed: action.payload }));
  },
  [deleteTodo.type]: (state, action) => {
    state.items = state.items.filter((t) => t.id !== action.payload.id);
  },
});

export const reducer = {
  counter: counterReducer,
  todos: todosReducer,
};
