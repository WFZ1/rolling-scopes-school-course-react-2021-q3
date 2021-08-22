import './search-dashboard.scss';
import React from 'react';
import { SearchBar } from '../search-bar/search-bar';
import { ArticlesField } from '../articles-field/articles-field';

export default class SearchDashboard extends React.Component {
  render(): JSX.Element {
    return (
      <div className="search-dashboard">
        <SearchBar classes="search-dashboard__bar" />
        <ArticlesField classes="search-dashboard__results" />
      </div>
    );
  }
}
