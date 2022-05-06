import { User, UserLogin } from "../controllers/user/user.interface";
import { createUser, findUser } from "../models/user";
import { jwtSign } from "../utils/jwtSign";
import dotenv from 'dotenv';
import md5 from "md5";
import jwt from 'jsonwebtoken';

dotenv.config();

export const signUpService = async (user: User) => {
  user.password = md5(user.password);
  return await createUser(user);
}

export const signInService = async (user: UserLogin): Promise<string | undefined> => {
  const found = await findUser(user);
  const hashedPassword = md5(user.password);
  let result;

  if (found) {
    if (found.password === hashedPassword) {
      result = jwtSign(found, process.env.SECRET);
    }
  }

  if (!result) {
    throw new Error('Invalid credentials');
  }

  return result;
}