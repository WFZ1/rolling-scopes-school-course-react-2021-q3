import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { Article } from '../src/components/article/article';

const article = {
  author: 'Man',
  content: 'content ...',
  description: '...',
  publishedAt: '08-25-2021',
  source: { id: 'localhost', name: 'localhost' },
  title: 'Article1',
  url: 'https://news.com',
  urlToImage: 'https://news.com/images/1',
  id: 'news&dot_com'
};

const article2 = {
  author: 'Woman',
  content: '...',
  description: 'description ...',
  publishedAt: '08-25-2021',
  source: { id: 'localhost', name: 'localhost' },
  title: 'Article2',
  url: 'https://news.com',
  urlToImage: 'https://news.com/images/2',
  id: 'news&dot_com'
};

const customRender = (ui: JSX.Element) => render(
  <Provider store={store}>{ui}</Provider>
);

// By example https://testing-library.com/docs/example-update-props/

describe('Article', () => {
  test('Calling render with the same component on the same container does not remount', () => {
    const { rerender, getByRole, getAllByRole } = customRender(<Article article={article} />);

    expect(getByRole('heading', { name: article.title })).toBeTruthy();

    rerender(
      <Provider store={store}>
        <Article article={article2} />
      </Provider>
    );

    expect(getAllByRole('heading')).toHaveLength(1);
    expect(getByRole('heading', { name: article2.title })).toBeTruthy();
  });
});
