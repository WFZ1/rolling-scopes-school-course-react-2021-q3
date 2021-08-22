import './search-bar.scss';
import React, { FC, useState } from 'react';
import { set } from '../../redux/reducer';
import { UseAppDispatch } from '../../hooks';
import IArticleProps from '../../types/article-props.type';
import { NEWS_API_KEY, NEWS_API_SORT_TYPE, NEWS_API_URL } from '../../constants';

export const SearchBar: FC<{classes: string}> = ({ classes }: {classes: string}) => {
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>(NEWS_API_SORT_TYPE.relevant);
  const [pageSize, setPageSize] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = UseAppDispatch();

  const getArticleIdFromUrl = (url: string): string => url
    .replace(/https?:\/\//, '')
    .replace(/\//g, '&')
    .replace(/\./g, '&dot_');

  const addIdsToArticles = (articles: IArticleProps[]): IArticleProps[] =>
    articles.map((article) => {
      article.id = getArticleIdFromUrl(article.url);
      return article;
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiQueryStr = `?q=${search}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=${NEWS_API_KEY}`;
      const url = `${NEWS_API_URL}${apiQueryStr}`;

      const res = await fetch(url);
      const data = await res.json();

      const articles = addIdsToArticles(data.articles);

      dispatch(set({ articles, apiQueryStr }));
    }
    catch (err: unknown) {
      console.error(err);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className={`search-bar ${classes}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="search-bar__panel">
        <input
          className="search-bar__field search-bar__panel-field"
          type="search"
          value={search}
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-bar__btn" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </div>

      <div className="search-bar__options">
        <div className="search-bar__option search-bar__sort-by">
          <span className="search-bar__variant-title">Sort By:</span>
          <label className="search-bar__variant search-bar__sort-by-variant">
            <input
              className="search-bar__sort-by-field"
              type="radio"
              value={NEWS_API_SORT_TYPE.relevant}
              name="sortBy"
              checked={sortBy === NEWS_API_SORT_TYPE.relevant}
              onChange={(e) => setSortBy(e.target.value)}
            />
            Relevant
          </label>
          <label className="search-bar__variant search-bar__sort-by-variant">
            <input
              className="search-bar__sort-by-field"
              type="radio"
              value={NEWS_API_SORT_TYPE.popular}
              name="sortBy"
              checked={sortBy === NEWS_API_SORT_TYPE.popular}
              onChange={(e) => setSortBy(e.target.value)}
            />
            Popular
          </label>
          <label className="search-bar__variant search-bar__sort-by-variant">
            <input
              className="search-bar__sort-by-field"
              type="radio"
              value={NEWS_API_SORT_TYPE.newest}
              name="sortBy"
              checked={sortBy === NEWS_API_SORT_TYPE.newest}
              onChange={(e) => setSortBy(e.target.value)}
            />
            Newest
          </label>
        </div>
        <div className="search-bar__option search-bar__pagination">
          <label className="search-bar__variant search-bar__pagination-variant">
            <span className="search-bar__variant-title">
              Articles per page:
            </span>
            <input
              className="search-bar__field search-bar__page-size-field"
              type="number"
              value={pageSize}
              name="pageSize"
              onChange={(e) => setPageSize(+e.target.value)}
            />
          </label>
          <label className="search-bar__variant search-bar__pagination-variant">
            <span className="search-bar__variant-title">Page:</span>
            <input
              className="search-bar__field search-bar__page-field"
              type="number"
              value={page}
              name="page"
              onChange={(e) => setPage(+e.target.value)}
            />
          </label>
        </div>
      </div>
    </form>
  );
};
