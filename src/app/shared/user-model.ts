export class UserModel {
  id: number;
  name: string;
  email: string;
  address: string;
  dateOfBirth: string;
  gender: string;

  constructor(param?: UserModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

  // UserModel.exampleUser
  static get exampleUser(): UserModel {
    return {
      id: 0,
      name: 'Kiss Virág',
      email: 'kv@megi.hu',
      address: 'Futrinka u.',
      dateOfBirth: '2001.01.01',
      gender: 'male'
    };
  }
}
