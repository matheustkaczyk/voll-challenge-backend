import { Response } from "express";
import { User } from "./user.interface";
import { signUpService } from "../../services/user";

export const signUp = async (req: User, res: Response) => {
  try {
    await signUpService(req);
    
    res.status(201).end();
  } catch (error) {
    res.status(404).json({ error });
  }
}