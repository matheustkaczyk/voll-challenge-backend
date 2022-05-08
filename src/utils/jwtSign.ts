import { IUser } from "../controllers/user/user.interface";
import * as jwt from 'jsonwebtoken';

export const jwtSign = (payload: IUser, secret: string | undefined) => {
  const token = jwt.sign({ payload }, secret as string, { expiresIn: '7d' });
  return token;
}