import { IErrors } from '../interface/UserInfo';

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);

export const checkInputsValidation = (
  name: string,
  value: string,
  errors: IErrors
) => {
  switch (name) {
    case 'firstName':
      errors.firstName =
        value.length < 4
          ? 'First Name must be at least 4 characters long!'
          : '';
      break;

    case 'lastName':
      errors.lastName =
        value.length < 4 ? 'Last name must be at least 4 characters long!' : '';
      break;
    case 'email':
      errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
      break;
    default:
      break;
  }
};
