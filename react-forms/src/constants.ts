export const SIGN_UP_FORM_FIELDS_VALUES = {
  fullName: '',
  email: '',
  password: '',
  dateOfBirth: '',
  gender: '',
  paymentMethod: 'card',
  cardNumber: '',
  cardCvv: '',
  cardExpireMonth: 'pick-month',
  cardExpireYear: 'pick-year',
  termsAndConditions: false,
  marketingInfo: true
};

export const SIGN_UP_FORM_FIELDS_REGEX = [
  {
    name: 'fullName',
    regex: /(?=\d*\D+)^[^~!@#$%*()_—+=|:;"'`<>,.?/^]+$/
  },
  {
    // https://stackoverflow.com/a/201378/13431496
    name: 'email',
    regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[x01-x08x0bx0cx0e-x1fx21x23-x5bx5d-x7f]|\\[x01-x09x0bx0cx0e-x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[x01-x08x0bx0cx0e-x1fx21-x5ax53-x7f]|\\[x01-x09x0bx0cx0e-x7f])+)\])/
  },
  {
    name: 'password',
    regex: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^.{6,20}$/
  },
  {
    name: 'dateOfBirth',
    regex: /.+/
  },
  {
    name: 'gender',
    regex: /.+/
  },
  {
    name: 'cardNumber',
    regex: /^\d{16}$/
  },
  {
    name: 'cardCvv',
    regex: /^\d{3}$/
  },
  {
    name: 'cardExpireMonth',
    regex: /^\d+$/
  },
  {
    name: 'cardExpireYear',
    regex: /^\d+$/
  },
  {
    name: 'termsAndConditions',
    regex: /true/
  },
  {
    name: 'marketingInfo',
    regex: /true/
  }
]
