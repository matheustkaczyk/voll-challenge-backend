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

export const signIn = async (req: Request, res: Response) => {
  try {
    const signIn = await signInService(req.body);

    res.status(200).json(signIn);
  } catch (error) {
    res.status(400).end();
  }
}