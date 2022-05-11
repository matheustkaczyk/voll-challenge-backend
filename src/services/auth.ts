import md5 from "md5";
import { IUser, IUserLogin } from "../controllers/user/user.interface";
import { createUser, findUser } from "../models/user";
import { jwtSign } from "../utils/jwtSign";

export const signUpService = async (user: IUser) => {
  user.password = md5(user.password);
  return await createUser(user);
}

export const signInService = async (user: IUserLogin): Promise<string | undefined> => {
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