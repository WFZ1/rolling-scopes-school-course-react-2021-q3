import './user-data-card.scss';
import React from 'react';
import ISignUpFormFieldsValues from '../../types/sign-up-form-fields-values.type';

export default class UserDataCard extends React.Component<{ classes: string, data: ISignUpFormFieldsValues }> {
  render(): JSX.Element {
    return (
      <div className={ `user-data-card ${ this.props.classes }` }>
        {
          Object.keys(this.props.data).map((field) => (
            <section className="user-data-card__section" key={ this.props.data.email }>
              <h4 className="user-data-card__section-title">{ field }:</h4>
              <span className="user-data-card__section-value">{ String(this.props.data[field as keyof ISignUpFormFieldsValues]) }</span>
            </section>
          ))
        }
      </div>
    );
  }
}
