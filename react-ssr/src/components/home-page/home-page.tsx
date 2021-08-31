import './home-page.scss';
import React from 'react';
import SearchDashboard from '../search-dashboard/search-dashboard';

export default class HomePage extends React.Component {
  render(): JSX.Element {
    if (IS_CLIENT) {
      document.body.className = 'page home-page';
    }

    return (
      <main className="home-page__main page__main main">
        <SearchDashboard />
      </main>
    );
  }
}
