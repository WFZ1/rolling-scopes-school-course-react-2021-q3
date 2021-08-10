import './sign-up-form.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import ISignUpFormProps from '../../types/sign-up-form-props.type';
import ISignUpFormState from '../../types/sign-up-form-state.type';
import ISignUpFormFieldsValues from '../../types/sign-up-form-fields-values.type';
import { SIGN_UP_FORM_FIELDS_REGEX, SIGN_UP_FORM_FIELDS_VALUES } from '../../constants';

export default class SignUpForm extends React.Component<ISignUpFormProps, ISignUpFormState> {
  constructor(props: ISignUpFormProps) {
    super(props);

    this.state = {
      fields: { ...SIGN_UP_FORM_FIELDS_VALUES },
      errors: []
    };
  }

  private resetForm(): void {
    this.setState((prevState) => ({
      ...prevState,
      fields: { ...SIGN_UP_FORM_FIELDS_VALUES }
    }));
  }

  private handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const keys = Object.keys(this.state.fields);
    let errors: string[] = [];

    keys.forEach((key) => {
      const isErrorsArr = this.checkValidation(key as keyof ISignUpFormFieldsValues);

      if (isErrorsArr) {
        const allErrors = [...errors, ...isErrorsArr];
        errors = [...new Set(allErrors)];
      }
    });

    if (errors.length) {
      this.setState((prevState) => ({
        ...prevState,
        errors
      }));
    }
    else {
      this.props.saveUserData(this.state.fields);
      this.resetForm();
    }
  }

  private handleChange(e: React.FormEvent): void {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState((prevState) => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [target.name]: value
      }
    }));
  }

  private checkValidation(fieldName: keyof ISignUpFormFieldsValues): string[] | false {
    const field = SIGN_UP_FORM_FIELDS_REGEX.find((fld) => fld.name === fieldName);

    if (!field) return false;

    const fieldValue = String(this.state.fields[fieldName]);
    let errors = [
      ...this.state.errors.filter(fld => fld !== fieldName),
    ];

    if (!field.regex.test(fieldValue)) {
      errors = [...errors, fieldName];
    }

    return errors;
  }

  private defineChangedField(prevState: ISignUpFormState): void {
    const fields = Object.keys(this.state.fields);

    fields.forEach((field) => {
      const key = field as keyof ISignUpFormFieldsValues;

      if (this.state.fields[key] !== prevState.fields[key]) {
        const errors = this.checkValidation(key);
        if (!errors) return;

        this.setState((previousState) => ({
          ...previousState,
          errors
        }));
      }
    });
  }

  componentDidUpdate(prevProps: ISignUpFormProps, prevState: ISignUpFormState): void {
    this.defineChangedField(prevState);
  }

  render(): JSX.Element {
    return (
      <form className={`sign-up-form ${this.props.classes}`} noValidate onSubmit={ (e) => this.handleSubmit(e) }>
        <section className="sign-up-form__section">
          <h4 className="sign-up-form__subtitle">Account</h4>

          <div className={ `sign-up-form__input-group sign-up-form__input-group-icon ${ this.state.errors.includes('fullName') ? 'sign-up-form__input__invalid' : '' }` }>
            <input
              className="sign-up-form__input"
              type="text"
              value={ this.state.fields.fullName }
              name="fullName"
              placeholder="Full Name"
              required
              onChange={ (e) => this.handleChange(e) }
            />
            <div className="sign-up-form__input-icon">
              <i className="fa fa-user"></i>
            </div>
            <p className="sign-up-form__input-error">
              { 'Full name can\'t be empty, contain only numbers, contain service characters (~ ! @ # $ % * () _ — + = | : ; " \' ` < > , . ? / ^).' }
            </p>
          </div>

          <div className={ `sign-up-form__input-group sign-up-form__input-group-icon ${ this.state.errors.includes('email') ? 'sign-up-form__input__invalid' : '' }` }>
            <input
              className="sign-up-form__input"
              type="email"
              value={ this.state.fields.email }
              name="email"
              placeholder="Email Address"
              required
              onChange={ (e) => this.handleChange(e) }
            />
            <div className="sign-up-form__input-icon">
              <i className="fa fa-envelope"></i>
            </div>
            <p className="sign-up-form__input-error">Email can&rsquo;t be empty, must comply with the standard email generation rule RFC</p>
          </div>

          <div className={ `sign-up-form__input-group sign-up-form__input-group-icon ${ this.state.errors.includes('password') ? 'sign-up-form__input__invalid' : '' }` }>
            <input
              className="sign-up-form__input"
              type="password"
              value={ this.state.fields.password }
              name="password"
              placeholder="Password"
              required
              onChange={ (e) => this.handleChange(e) }
            />
            <div className="sign-up-form__input-icon">
              <i className="fa fa-key"></i>
            </div>
            <p className="sign-up-form__input-error">Password must have length from 6 to 20 characters, contain numbers, small and capital letters.</p>
          </div>
        </section>

        <section className="sign-up-form__section">
          <div className="sign-up-form__col-half">
            <h4 className="sign-up-form__subtitle">Date of Birth</h4>

            <div className={ `sign-up-form__input-group ${ this.state.errors.includes('dateOfBirth') ? 'sign-up-form__input__invalid' : '' }` }>
              <input
                className="sign-up-form__input sign-up-form__input-date"
                type="date"
                value={ this.state.fields.dateOfBirth }
                name="dateOfBirth"
                min="1900-01-01"
                max="2021-12-31"
                onChange={ (e) => this.handleChange(e) }
              />
              <p className="sign-up-form__input-error">Date of birth must set.</p>
            </div>
          </div>

          <div className="sign-up-form__col-half">
            <h4 className="sign-up-form__subtitle">Gender</h4>

            <div className={ `sign-up-form__input-group ${ this.state.errors.includes('gender') ? 'sign-up-form__input__invalid' : '' }` }>
              <input
                className="sign-up-form__input sign-up-form__input-radio"
                id="sign-up-form__gender-male"
                type="radio"
                checked={ this.state.fields.gender === 'male' }
                name="gender"
                value="male"
                onChange={ (e) => this.handleChange(e) }
              />
              <label
                className="sign-up-form__label"
                htmlFor="sign-up-form__gender-male"
              >
                Male
              </label>

              <input
                className="sign-up-form__input sign-up-form__input-radio"
                id="sign-up-form__gender-female"
                type="radio"
                checked={ this.state.fields.gender === 'female' }
                name="gender"
                value="female"
                onChange={ (e) => this.handleChange(e) }
              />
              <label
                className="sign-up-form__label"
                htmlFor="sign-up-form__gender-female"
              >
                Female
              </label>

              <p className="sign-up-form__input-error">Gender must select.</p>
            </div>
          </div>
        </section>

        <section className="sign-up-form__section">
          <h4 className="sign-up-form__subtitle">Payment Details</h4>

          <div className="sign-up-form__input-group">
            <input
              className="sign-up-form__input sign-up-form__input-radio"
              id="sign-up-form__payment-method-card"
              type="radio"
              checked={ this.state.fields.paymentMethod === 'card' }
              name="paymentMethod"
              value="card"
              onChange={ (e) => this.handleChange(e) }
            />
            <label
              className="sign-up-form__label"
              htmlFor="sign-up-form__payment-method-card"
            >
              <i className="fab fa-cc-visa"></i>Credit Card
            </label>

            <input
              className="sign-up-form__input sign-up-form__input-radio"
              id="sign-up-form__payment-method-paypal"
              type="radio"
              checked={ this.state.fields.paymentMethod === 'paypal' }
              name="paymentMethod"
              value="paypal"
              onChange={ (e) => this.handleChange(e) }
              disabled
            />
            <label
              className="sign-up-form__label"
              htmlFor="sign-up-form__payment-method-paypal"
            >
              <i className="fab fa-cc-paypal"></i>Paypal
            </label>
          </div>

          <div className={ `sign-up-form__input-group sign-up-form__input-group-icon ${ this.state.errors.includes('cardNumber') ? 'sign-up-form__input__invalid' : '' }` }>
            <input
              className="sign-up-form__input"
              type="text"
              value={ this.state.fields.cardNumber }
              name="cardNumber"
              placeholder="Card Number"
              maxLength={ 16 }
              onChange={ (e) => this.handleChange(e) }
            />
            <div className="sign-up-form__input-icon">
              <i className="fa fa-credit-card"></i>
            </div>
            <p className="sign-up-form__input-error">Card number must have 16 numbers.</p>
          </div>

          <div className="sign-up-form__col-half">
            <div className={ `sign-up-form__input-group sign-up-form__input-group-icon ${ this.state.errors.includes('cardCvv') ? 'sign-up-form__input__invalid' : '' }` }>
              <input
                className="sign-up-form__input"
                type="text"
                value={ this.state.fields.cardCvv }
                name="cardCvv"
                placeholder="Card CVV"
                maxLength={ 3 }
                onChange={ (e) => this.handleChange(e) }
              />
              <div className="sign-up-form__input-icon">
                <i className="fa fa-user"></i>
              </div>
              <p className="sign-up-form__input-error">Card CVV must have 3 numbers.</p>
            </div>
          </div>

          <div className="sign-up-form__col-half">
            <div className={ `sign-up-form__input-group ${ (this.state.errors.includes('cardExpireMonth') || this.state.errors.includes('cardExpireYear')) ? 'sign-up-form__input__invalid' : '' }` }>
              <select
                className="sign-up-form__select sign-up-form__card-expire-month"
                value={ this.state.fields.cardExpireMonth }
                name="cardExpireMonth"
                onChange={ (e) => this.handleChange(e) }
                onBlur={ (e) => this.handleChange(e) }
              >
                <option className="sign-up-form__option" value="pick-month">
                  Pick month
                </option>
                <option className="sign-up-form__option" value="01">
                  01
                </option>
                <option className="sign-up-form__option" value="02">
                  02
                </option>
                <option className="sign-up-form__option" value="03">
                  03
                </option>
                <option className="sign-up-form__option" value="04">
                  04
                </option>
                <option className="sign-up-form__option" value="05">
                  05
                </option>
                <option className="sign-up-form__option" value="06">
                  06
                </option>
                <option className="sign-up-form__option" value="07">
                  07
                </option>
                <option className="sign-up-form__option" value="08">
                  08
                </option>
                <option className="sign-up-form__option" value="09">
                  09
                </option>
                <option className="sign-up-form__option" value="10">
                  10
                </option>
                <option className="sign-up-form__option" value="11">
                  11
                </option>
                <option className="sign-up-form__option" value="12">
                  12
                </option>
              </select>
              <select
                className="sign-up-form__select sign-up-form__card-expire-year"
                value={ this.state.fields.cardExpireYear }
                name="cardExpireYear"
                onChange={ (e) => this.handleChange(e) }
                onBlur={ (e) => this.handleChange(e) }
              >
                <option className="sign-up-form__option" value="pick-year">
                  Pick year
                </option>
                <option className="sign-up-form__option" value="2021">
                  2021
                </option>
                <option className="sign-up-form__option" value="2022">
                  2022
                </option>
                <option className="sign-up-form__option" value="2023">
                  2023
                </option>
                <option className="sign-up-form__option" value="2024">
                  2024
                </option>
                <option className="sign-up-form__option" value="2025">
                  2025
                </option>
                <option className="sign-up-form__option" value="2026">
                  2026
                </option>
                <option className="sign-up-form__option" value="2027">
                  2027
                </option>
                <option className="sign-up-form__option" value="2028">
                  2028
                </option>
                <option className="sign-up-form__option" value="2029">
                  2029
                </option>
                <option className="sign-up-form__option" value="2030">
                  2030
                </option>
              </select>

              <p className="sign-up-form__input-error">Card expiry date must set.</p>
            </div>
          </div>
        </section>

        <section className="sign-up-form__section sign-up-form__terms">
          <h4 className="sign-up-form__subtitle">Terms and Conditions</h4>

          <div className={ `sign-up-form__input-group ${ this.state.errors.includes('termsAndConditions') ? 'sign-up-form__input__invalid' : '' }` }>
            <input
              className="sign-up-form__input sign-up-form__input-checkbox"
              id="sign-up-form__terms"
              checked={ this.state.fields.termsAndConditions }
              type="checkbox"
              name="termsAndConditions"
              required
              onChange={ (e) => this.handleChange(e) }
            />
            <label
              className="sign-up-form__label"
              htmlFor="sign-up-form__terms"
            >
              I accept the terms and conditions for signing up to this service,
              and hereby confirm I have read the privacy policy.
            </label>
            <p className="sign-up-form__input-error">Please accept our terms & conditions.</p>
          </div>
        </section>

        <section className="sign-up-form__section">
          <h4 className="sign-up-form__subtitle">Email Notifications</h4>

          <div className={ `sign-up-form__input-group sign-up-form__switcher-container ${ this.state.errors.includes('marketingInfo') ? 'sign-up-form__input__invalid' : '' }` }>
            <label className="sign-up-form__switcher sign-up-form__notifications-switcher">
              <input
                className="sign-up-form__switcher-checkbox"
                type="checkbox"
                checked={ this.state.fields.marketingInfo }
                name="marketingInfo"
                onChange={ (e) => this.handleChange(e) }
              />
              <span className="sign-up-form__switcher-panel" data-on="On" data-off="Off"></span>
              <span className="sign-up-form__switcher-handle"></span>
            </label>
            <p className="sign-up-form__switcher-text">Marketing information, offers, updates, promotions, including current or future product announcements and updates.</p>
            <p className="sign-up-form__input-error">Please enable email notifications.</p>
          </div>
        </section>

        <input className="sign-up-form__btn-submit" type="submit" value="Submit" />
      </form>
    );
  }
}
