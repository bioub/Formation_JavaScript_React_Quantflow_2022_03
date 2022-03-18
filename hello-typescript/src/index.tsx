import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './store/reducers';
import { State } from './types';

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={configureStore<State>({
        reducer: reducer,
        devTools: process.env.NODE_ENV !== 'production',
      })}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
