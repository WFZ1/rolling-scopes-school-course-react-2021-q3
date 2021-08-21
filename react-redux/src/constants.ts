export const NEWS_API_KEY = 'b0661e3b7f2841528d00d8e1a35fbdeb';

export const NEWS_API_SORT_TYPE = {
  relevant: 'relevancy',
  popular: 'popularity',
  newest: 'publishedAt',
};

export const GET_ARTICLES = 'get/articles';

export const INITIAL_STATE = {
  articles: [],
  apiQueryOpts: {
    q: '',
    sortBy: '',
    pageSize: 0,
    page: 0
  }
};
