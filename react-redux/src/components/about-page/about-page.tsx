import './about-page.scss';
import React from 'react';

export default class AboutPage extends React.Component {
  render(): JSX.Element {
    document.body.className = 'page about-page';

    return (
      <main className="about-page__main page__main main">
        <h2 className="page__title">About Page</h2>
      </main>
    );
  }
}
