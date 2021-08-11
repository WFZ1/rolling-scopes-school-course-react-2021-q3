import './search-bar.scss';
import React from 'react';
import ISearchBarState from '../../types/search-bar-state.type';
import IArticleProps from '../../types/article-props.type';
import { NEWS_API_KEY, NEWS_API_SORT_TYPE } from '../../constants';

export default class SearchBar extends React.Component<{ classes: string, saveArticles: (articles: IArticleProps[]) => void }, ISearchBarState> {
  constructor(props: { classes: string, saveArticles: (articles: IArticleProps[]) => void }) {
    super(props);

    this.state = {
      search: '',
      sortBy: NEWS_API_SORT_TYPE.relevant,
      pageSize: 5,
      page: 1,
      isLoading: false,
    };
  }

  private async handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    this.setState((prevState) => ({
      ...prevState,
      isLoading: true
    }));

    try {
      const url = `https://newsapi.org/v2/everything?q=${ this.state.search }&sortBy=${ this.state.sortBy }&pageSize=${ this.state.pageSize }&page=${ this.state.page }&apiKey=${ NEWS_API_KEY }`;

      const res = await fetch(url);
      const data = await res.json();
      this.props.saveArticles(data.articles);
    }
    catch (err: unknown) {
      console.error(e);
    }
    finally {
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    }
  };

  private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: value
    }));
  };

  render(): JSX.Element {
    return (
      <form className={ `search-bar ${ this.props.classes }` } onSubmit={ (e) => this.handleSubmit(e) }>
        <div className="search-bar__panel">
          <input
            className="search-bar__field search-bar__panel-field"
            type="search"
            value={ this.state.search }
            name="search"
            onChange={ (e) => this.handleChange(e) }
          />
          <button
            className="search-bar__btn"
            disabled={ this.state.isLoading }>
            { this.state.isLoading ? 'Loading...' : 'Search' }
          </button>
        </div>

        <div className="search-bar__options">
          <div className="search-bar__option search-bar__sort-by">
            <span className="search-bar__variant-title">Sort By:</span>
            <label className="search-bar__variant search-bar__sort-by-variant">
              <input
                className="search-bar__sort-by-field"
                type="radio"
                value={ NEWS_API_SORT_TYPE.relevant }
                name="sortBy"
                checked={ this.state.sortBy === NEWS_API_SORT_TYPE.relevant }
                onChange={ (e) => this.handleChange(e) }
              />
              Relevant
            </label>
            <label className="search-bar__variant search-bar__sort-by-variant">
              <input
                className="search-bar__sort-by-field"
                type="radio"
                value={ NEWS_API_SORT_TYPE.popular }
                name="sortBy"
                checked={ this.state.sortBy === NEWS_API_SORT_TYPE.popular }
                onChange={ (e) => this.handleChange(e) }
              />
              Popular
            </label>
            <label className="search-bar__variant search-bar__sort-by-variant">
              <input
                className="search-bar__sort-by-field"
                type="radio"
                value={ NEWS_API_SORT_TYPE.newest }
                name="sortBy"
                checked={ this.state.sortBy === NEWS_API_SORT_TYPE.newest }
                onChange={ (e) => this.handleChange(e) }
              />
              Newest
            </label>
          </div>
          <div className="search-bar__option search-bar__pagination">
            <label className="search-bar__variant search-bar__pagination-variant">
              <span className="search-bar__variant-title">Articles per page:</span>
              <input
                className="search-bar__field search-bar__page-size-field"
                type="number"
                value={ this.state.pageSize }
                name="pageSize"
                onChange={ (e) => this.handleChange(e) }
              />
            </label>
            <label className="search-bar__variant search-bar__pagination-variant">
              <span className="search-bar__variant-title">Page:</span>
              <input
                className="search-bar__field search-bar__page-field"
                type="number"
                value={ this.state.page }
                name="page"
                onChange={ (e) => this.handleChange(e) }
              />
            </label>
          </div>
        </div>
      </form>
    );
  }
}
