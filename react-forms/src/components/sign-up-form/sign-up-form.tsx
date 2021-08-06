import './sign-up-form.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';

export default class SignUpForm extends React.Component<{ classes: string }> {
  // private handleSunbmit(e: Event) {
  //   e.preventDefault();
  // }

  // onSubmit={ this.handleSubmit }

  render(): JSX.Element {
    return (
      <form className={`sign-up-form ${this.props.classes}`}>
        <section className="sign-up-form__section">
          <h4 className="sign-up-form__subtitle">Account</h4>

          <div className="sign-up-form__input-group sign-up-form__input-group-icon">
            <input
              className="sign-up-form__input"
              type="text"
              name="full-name"
              placeholder="Full Name"
            />
            <div className="sign-up-form__input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>

          <div className="sign-up-form__input-group sign-up-form__input-group-icon">
            <input
              className="sign-up-form__input"
              type="email"
              name="email"
              placeholder="Email Adress"
            />
            <div className="sign-up-form__input-icon">
              <i className="fa fa-envelope"></i>
            </div>
          </div>

          <div className="sign-up-form__input-group sign-up-form__input-group-icon">
            <input
              className="sign-up-form__input"
              type="password"
              name="password"
              placeholder="Password"
            />
            <div className="sign-up-form__input-icon">
              <i className="fa fa-key"></i>
            </div>
          </div>
        </section>

        <section className="sign-up-form__section">
          <div className="sign-up-form__col-half">
            <h4 className="sign-up-form__subtitle">Date of Birth</h4>

            <div className="sign-up-form__input-group">
              <input
                className="sign-up-form__input sign-up-form__input-date"
                type="date"
                name="date-of-birth"
                min="1900-01-01"
                max="2021-12-31"
              />
            </div>
          </div>

          <div className="sign-up-form__col-half">
            <h4 className="sign-up-form__subtitle">Gender</h4>

            <div className="sign-up-form__input-group">
              <input
                className="sign-up-form__input sign-up-form__input-radio"
                id="sign-up-form__gender-male"
                type="radio"
                name="gender"
                value="male"
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
                name="gender"
                value="female"
              />
              <label
                className="sign-up-form__label"
                htmlFor="sign-up-form__gender-female"
              >
                Female
              </label>
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
              name="payment-method"
              value="card"
              checked
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
              name="payment-method"
              value="paypal"
            />
            <label
              className="sign-up-form__label"
              htmlFor="sign-up-form__payment-method-paypal"
            >
              <i className="fab fa-cc-paypal"></i>Paypal
            </label>
          </div>

          <div className="sign-up-form__input-group sign-up-form__input-group-icon">
            <input
              className="sign-up-form__input"
              type="text"
              name="card-number"
              placeholder="Card Number"
            />
            <div className="sign-up-form__input-icon">
              <i className="fa fa-credit-card"></i>
            </div>
          </div>

          <div className="sign-up-form__col-half">
            <div className="sign-up-form__input-group sign-up-form__input-group-icon">
              <input
                className="sign-up-form__input"
                type="text"
                name="card-cvv"
                placeholder="Card CVV"
                maxLength={ 3 }
              />
              <div className="sign-up-form__input-icon">
                <i className="fa fa-user"></i>
              </div>
            </div>
          </div>

          <div className="sign-up-form__col-half">
            <div className="sign-up-form__input-group">
              <select
                className="sign-up-form__select sign-up-form__card-expire-month"
                name="card-expire-month"
              >
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
                name="card-expire-year"
              >
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
            </div>
          </div>
        </section>

        <section className="sign-up-form__section sign-up-form__terms">
          <h4 className="sign-up-form__subtitle">Terms and Conditions</h4>

          <div className="sign-up-form__input-group">
            <input
              className="sign-up-form__input sign-up-form__input-checkbox"
              id="sign-up-form__terms"
              type="checkbox"
            />
            <label
              className="sign-up-form__label"
              htmlFor="sign-up-form__terms"
            >
              I accept the terms and conditions for signing up to this service,
              and hereby confirm I have read the privacy policy.
            </label>
          </div>
        </section>

        <section className="sign-up-form__section">
          <h4 className="sign-up-form__subtitle">Email Notifications</h4>

          <div className="sign-up-form__input-group sign-up-form__switcher-container">
            <label className="sign-up-form__switcher sign-up-form__notifications-switcher">
              <input className="sign-up-form__switcher-checkbox" type="checkbox" />
              <span className="sign-up-form__switcher-panel" data-on="On" data-off="Off"></span>
              <span className="sign-up-form__switcher-handle"></span>
            </label>
            <p className="sign-up-form__switcher-text">Marketing information, offers, updates, promotions, including current or future product announcements and updates.</p>
          </div>
        </section>
      </form>
    );
  }
}
