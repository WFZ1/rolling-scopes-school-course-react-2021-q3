import './home-page.scss';
import React from 'react';
import SignUpForm from '../sign-up-form/sign-up-form';

export default class HomePage extends React.Component {
  render(): JSX.Element {
    document.body.className = 'page home-page';

    return (
      <main className="home-page__main main">
        <SignUpForm classes="page__sign-up-form" />
      </main>
    );
  }
}
