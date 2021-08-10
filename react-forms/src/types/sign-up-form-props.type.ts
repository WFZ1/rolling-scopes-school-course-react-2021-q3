import ISignUpFormFieldsValues from './sign-up-form-fields-values.type';

export default interface ISignUpFormProps {
  classes: string;
  saveUserData: (fields: ISignUpFormFieldsValues) => void;
}
