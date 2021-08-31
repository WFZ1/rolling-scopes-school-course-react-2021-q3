import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import renderTemplate from './renderTemplate';
import App from './app';
import { INITIAL_STATE } from './constants';

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
  const store = configureStore({
    reducer: {
      news: () => INITIAL_STATE,
    },
    devTools: process.env.NODE_ENV !== 'production'
  });

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );

  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
      data: JSON.stringify({ news: INITIAL_STATE }),
    })
  );
});

app.listen(3000, () => console.log(`Server is listening on port: 3000`));
