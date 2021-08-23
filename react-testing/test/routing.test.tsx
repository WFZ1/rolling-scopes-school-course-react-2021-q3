import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import App from '../src/app';
import { createMemoryHistory } from 'history';

// By example https://testing-library.com/docs/example-react-router/

test('Home and about pages rendering/navigating', () => {
  const history = createMemoryHistory();

  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  expect(document.body.classList.contains('home-page')).toBe(true);

  const link = screen.getByText(/About/i);
  fireEvent.click(link);

  expect(screen.getByText(/About Page/i)).toBeTruthy();
});

test('Landing on a bad page', () => {
  window.history.pushState({}, '404 page', '/some/bad/route');

  render(<App />);

  expect(screen.getByText(/Page not found/i)).toBeTruthy();
});
