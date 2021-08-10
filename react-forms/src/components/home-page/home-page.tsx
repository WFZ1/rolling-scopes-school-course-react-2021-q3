import './home-page.scss';
import React from 'react';
import SignUpForm from '../sign-up-form/sign-up-form';
import UsersDataCardsField from '../users-data-cards-field/users-data-cards-field';
import ISignUpFormFieldsValues from '../../types/sign-up-form-fields-values.type';

export default class HomePage extends React.Component<unknown, { usersData: ISignUpFormFieldsValues[] }> {
  constructor(props: unknown) {
    super(props);

    this.saveUserData = this.saveUserData.bind(this);

    this.state = {
      usersData: []
    };
  }

  saveUserData(fields: ISignUpFormFieldsValues): void {
    this.setState((prevState) => ({
      usersData: prevState.usersData.concat(fields)
    }));
  }

  render(): JSX.Element {
    document.body.className = 'page home-page';

    return (
      <main className="home-page__main main">
        <SignUpForm classes="home-page__sign-up-form" saveUserData={ this.saveUserData } />
        <UsersDataCardsField classes="home-page__users-data-cards-field" usersData={ this.state.usersData } />
      </main>
    );
  }
}
