export interface IUser {
  name: string;
  email: string;
  password: string;
  balance: number;
  role: string;
}

export interface IUserNoPassword {
  name: string;
  email: string;
  password?: string;
  balance: number;
  role: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserModel {
  _id: string;
  name: string;
  email: string;
  password: string;
  balance: number;
  role: string;
  created_at: Date;
}