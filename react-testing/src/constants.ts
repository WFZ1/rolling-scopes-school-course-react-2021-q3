export const NEWS_API_KEY = 'b0661e3b7f2841528d00d8e1a35fbdeb';

export const NEWS_API_SORT_TYPE = {
  relevant: 'relevancy',
  popular: 'popularity',
  newest: 'publishedAt',
};

export const NEWS_API_URL = 'https://newsapi.org/v2/everything';

export const INITIAL_STATE = {
  data: {
    articles: [],
    status: undefined,
    totalResults: undefined
  },
  apiQueryStr: '',
};
