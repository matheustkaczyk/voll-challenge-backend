import { Response } from "express";
import { User } from "./user.interface";
import { signUpService } from "../../services/user";

export const signUp = (req: User, res: Response) => {
  return signUpService(req);
}