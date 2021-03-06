import { createReducer } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos, fetchTodosSuccess, increment, setNewTodo, toggleTodos } from './actions'

const initialState = {
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
    ]
  }
};

export const counterReducer = createReducer(initialState.counter, {
  [increment]: (state, action) => {
    state.nbClicks += action.payload;
  }
});

export const todosReducer = createReducer(initialState.todos, {
  [setNewTodo]: (state, action) => {
    state.newTodo = action.payload;
  },
  [addTodo]: (state, action) => {
    state.items.unshift(action.payload)
  },
  [fetchTodos]: (state, action) => {
    state.loading = true;
  },
  [fetchTodosSuccess]: (state, action) => {
    state.loading = false;
    state.items = [...state.items, ...action.payload];
  },
  [toggleTodos]: (state, action) => {
    state.items = state.items.map((t) => ({ ...t, completed: action.payload }))
  },
  [deleteTodo]: (state, action) => {
    state.items = state.items.filter((t) => t.id !== action.payload.id)
  },
});

export const reducer = {
  counter: counterReducer,
  todos: todosReducer,
};
