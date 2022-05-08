import { Request, Response } from "express";
import { signInService, signUpService, updateCurrencyService } from "../../services/user";

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

export const updateCurrency = async (req: Request, res: Response) => {
  try {
    await updateCurrencyService(req.body, req.body.currency);

    return res.status(200).end();
  } catch(error) {
    return res.status(400).end();
  }
}
