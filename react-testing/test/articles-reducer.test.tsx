import { Action } from 'redux';
import articlesReducer, { set } from '../src/redux/reducer';
import { INITIAL_STATE, NEWS_API_URL } from '../src/constants';

const newsData = {
  data: {
    articles: [{
      author: 'Man',
      content: 'content ...',
      description: '...',
      publishedAt: '08-25-2021',
      source: { id: 'localhost', name: 'localhost' },
      title: 'Article',
      url: 'https://news.com',
      urlToImage: 'https://news.com/images/1',
      id: 'news&dot_com'
    }],
    status: 'ok',
    totalResults: 123
  },
  apiQueryStr: `${NEWS_API_URL}?q=news`
};

const newsData2 = {
  data: {
    articles: [{
      author: 'Woman',
      content: '...',
      description: 'description ...',
      publishedAt: '08-25-2021',
      source: { id: 'localhost', name: 'localhost' },
      title: 'Article',
      url: 'https://news.com',
      urlToImage: 'https://news.com/images/2',
      id: 'news&dot_com'
    }],
    status: 'ok',
    totalResults: 321
  },
  apiQueryStr: `${NEWS_API_URL}?q=news`
};

describe('Articles Reducer', () => {
  test('Should return the initial state', () => {
    expect(articlesReducer(undefined, {} as Action)).toEqual(INITIAL_STATE);
  });

  test('Should handle data being set', () => {
    const prevState = INITIAL_STATE;
    const newState = newsData;

    expect(articlesReducer(prevState, set(newState))).toEqual(newState);
  });

  test('Should handle data being set instead existing data', () => {
    const prevState = newsData;
    const newState = newsData2;

    expect(articlesReducer(prevState, set(newState))).toEqual(newState);
  });
});
