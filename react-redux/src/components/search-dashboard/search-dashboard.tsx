import './search-dashboard.scss';
import React from 'react';
import { SearchBar } from '../search-bar/search-bar';
import ArticlesField from '../articles-field/articles-field';
import IArticleProps from '../../types/article-props.type';
import INewsApiQueryOpts from '../../types/news-api-query-opts.type';

export default class SearchDashboard extends React.Component<
  unknown,
  { articles: IArticleProps[], apiQueryOpts: INewsApiQueryOpts }
> {
  constructor(props: unknown) {
    super(props);

    this.saveData = this.saveData.bind(this);

    this.state = {
      articles: [],
      apiQueryOpts: {
        q: '',
        sortBy: '',
        pageSize: 0,
        page: 0
      }
    };
  }

  saveData(articles: IArticleProps[], apiQueryOpts: INewsApiQueryOpts): void {
    this.setState({
      articles,
      apiQueryOpts
    });
  }

  render(): JSX.Element {
    return (
      <div className="search-dashboard">
        <SearchBar
          classes="search-dashboard__bar"
          saveData={this.saveData}
        />
        <ArticlesField
          classes="search-dashboard__results"
          articles={this.state.articles}
          apiQueryOpts={this.state.apiQueryOpts}
        />
      </div>
    );
  }
}
