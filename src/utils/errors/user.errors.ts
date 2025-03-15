export class UserNotFoundByUsername {
  name: string;
  message: string;
  code: number;

  constructor() {
    this.name = UserNotFoundByUsername.name;
    this.message = 'User not found with given username.';
    this.code = 404;
  }
}

export class UserAlreadyExists {
  name: string;
  message: string;
  code: number;

  constructor() {
    this.name = UserAlreadyExists.name;
    this.message = 'This username is in use.';
    this.code = 400;
  }
}
