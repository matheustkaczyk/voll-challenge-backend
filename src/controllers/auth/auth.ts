import { Request, Response } from "express";
import { signInService, signUpService } from "../../services/auth";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    await signUpService(req.body);
    
    res.status(201).end();
  } catch (error) {
    res.status(400).end();
  }
}

export const signIn = async (req: Request, res: Response) => {
  try {
    const signIn = await signInService(req.body);
    return res.status(200).json({ token: signIn });
  } catch (error) {
    res.status(401).end();
  }
}