export interface IUserInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  errors: {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
  };
}
