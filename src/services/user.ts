import { User, UserLogin } from "../controllers/user/user.interface";
import { createUser, findUser } from "../models/user";
import md5 from "md5";

export const signUpService = async (user: User) => {
  user.password = md5(user.password);
  return await createUser(user);
}

export const signInService = async (user: UserLogin): Promise<any> => {
  const found = await findUser(user);
  const hashedPassword = md5(user.password);

  if (found) {
    if (found.password === hashedPassword) {
      return found;
    }
  }
}