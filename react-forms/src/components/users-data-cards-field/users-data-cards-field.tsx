import './users-data-cards-field.scss';
import React from 'react';
import UserDataCard from '../user-data-card/user-data-card';
import ISignUpFormFieldsValues from '../../types/sign-up-form-fields-values.type';

export default class UsersDataCardsField extends React.Component<{ classes: string, usersData: ISignUpFormFieldsValues[] }> {
  render(): JSX.Element {
    return (
      <div className={ `users-data-cards-field ${ this.props.classes }` }>
        {
          this.props.usersData.map((userData) =>
            <UserDataCard classes="users-data-cards-field__card" key={ userData.email } data={ userData } />
          )
        }
      </div>
    );
  }
}
