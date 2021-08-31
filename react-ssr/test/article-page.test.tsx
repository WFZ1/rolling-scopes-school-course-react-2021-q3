import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import ArticlePage from '../src/components/article-page/article-page';

describe('Article Page', () => {
  test('Should render page', async () => {
    render(
      <Provider store={store}>
        <ArticlePage />
      </Provider>,
    );

    expect(document.body.classList.contains('article-page')).toBeTruthy();
  });
});
