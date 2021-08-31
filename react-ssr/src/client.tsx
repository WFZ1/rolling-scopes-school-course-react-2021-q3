import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './redux/reducer';
import { restoreDataOnClient } from './data/restoreDataOnClient';
import App from './app';

const store = configureStore({
  reducer: {
    news: articlesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: restoreDataOnClient()
});

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
