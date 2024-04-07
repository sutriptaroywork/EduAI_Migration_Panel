export const VALIDATION_CONSTANTS = {
  ALPHABET: {
    value: /^[a-zA-Z ]+$/,
    message: 'Must only contain alphabetic characters and spaces',
  },
  PAN: {
    value: /[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    message: 'Invalid PAN number',
  },
  MOBILE_NUMBER: {
    value: /^[1-9]{1}[0-9]{9}$/,
    message: 'Invalid mobile number',
  },
  EMAIL_ID: {
    value:
      // eslint-disable-next-line no-control-regex
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    message: 'Invalid Email ID',
  },
  POSITIVE_NUMBER: {
    value: /^[0-9]+$/,
    message: 'Must only contain positive numbers',
  },
  GST_NUMBER: {
    value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    message: 'Invalid GST number',
  },
  PASSWORD: {
    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    message: 'Minimum 8 characters, atleast one letter,one digit and one special character',
  },
  ALPHA_NUMERIC: {
    value: /^[a-zA-Z0-9 ]+$/,
    message: 'only characters and digits allowed',
  },
  URL: {
    value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
    message: 'Enter a valid url',
  },
  IFSC_CODE: {
    value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
    message: 'Invalid IFSC code',
  },
  ACC_NUMBER: {
    value: /^[0-9]{9,18}$/,
    message: 'Must contain 9 to 18 digits',
  },
  INTEGERS: {
    value: /^[1-9]\d*(\.\d+)?$/,
    message: 'Must contain only positive integers',
  },
  NUMBER_WITH_DECIMAL: {
    value: /^[-]?\d*\.?\d*$/,
    message: 'Must contain only numbers',
  },
};
