import ISignUpFormFieldsValues from './sign-up-form-fields-values.type';

export default interface ISignUpFormState {
  fields: ISignUpFormFieldsValues;
  errors: string[];
}
