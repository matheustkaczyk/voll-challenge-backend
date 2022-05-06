import { User } from "../controllers/user/user.interface";
import jwt from 'jsonwebtoken';

export const jwtSign = (payload: User, secret: string) => {
  const token = jwt.sign(payload, secret, { expiresIn: '7d' });
  return token
}