import { User } from "../controllers/user/user.interface";
import * as jwt from 'jsonwebtoken';

export const jwtSign = (payload: User, secret: string | undefined) => {
  const token = jwt.sign(payload, secret || 'mysecret', { expiresIn: '7d' });
  return token
}