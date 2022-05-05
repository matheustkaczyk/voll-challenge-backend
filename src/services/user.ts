import { User } from "../controllers/user/user.interface";
import { createUser } from "../models/user";

export const signUpService = (user: User) => {
  return createUser(user);
}