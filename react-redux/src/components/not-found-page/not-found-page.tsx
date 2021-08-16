import './not-found-page.scss';
import React from 'react';

export default class NotFoundPage extends React.Component {
  render(): JSX.Element {
    document.body.className = 'page not-found-page';

    return (
      <main className="not-found-page__main page__main main">
        <h2 className="page__title">404</h2>
        <p className="not-found-page__description">Page not found</p>
      </main>
    );
  }
}
