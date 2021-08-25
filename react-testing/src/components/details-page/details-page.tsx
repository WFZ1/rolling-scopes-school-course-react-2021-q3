import './details-page.scss';
import React from 'react';

export default class DetailsPage extends React.Component {
  render(): JSX.Element {
    document.body.className = 'page details-page';

    return (
      <>
        <main className="details-page__main page__main main">
          <h2 className="page__title">Details Page</h2>
        </main>
      </>
    );
  }
}
