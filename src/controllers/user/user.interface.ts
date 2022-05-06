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