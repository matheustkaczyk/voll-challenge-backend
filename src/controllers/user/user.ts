import { Request, Response } from "express";
import { signUpService } from "../../services/user";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    await signUpService(req.body);
    
    res.status(201).end();
  } catch (error) {
    res.status(404).end();
  }
}