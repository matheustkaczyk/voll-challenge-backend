export interface User {
  name: string;
  email: string;
  password: string;
  balance: number;
  role: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserModel {
  _id: string;
  name: string;
  email: string;
  password: string;
  balance: number;
  role: string;
  created_at: Date;
}