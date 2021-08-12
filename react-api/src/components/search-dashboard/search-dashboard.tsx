import './search-dashboard.scss';
import React from 'react';
import SearchBar from '../search-bar/search-bar';
import ArticlesField from '../articles-field/articles-field';
import IArticleProps from '../../types/article-props.type';

export default class SearchDashboard extends React.Component<
  unknown,
  { articles: IArticleProps[] }
> {
  constructor(props: unknown) {
    super(props);

    this.saveArticles = this.saveArticles.bind(this);

    this.state = {
      articles: [],
    };
  }

  saveArticles(articles: IArticleProps[]): void {
    this.setState({
      articles,
    });
  }

  render(): JSX.Element {
    return (
      <div className="search-dashboard">
        <SearchBar
          classes="search-dashboard__bar"
          saveArticles={this.saveArticles}
        />
        <ArticlesField
          classes="search-dashboard__results"
          articles={this.state.articles}
        />
      </div>
    );
  }
}
