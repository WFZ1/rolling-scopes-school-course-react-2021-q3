import './home-page.scss';
import React from 'react';

export default class HomePage extends React.Component {
  render(): JSX.Element {
    document.body.className = 'page home-page';

    return <main className="home-page__main main"></main>;
  }
}
