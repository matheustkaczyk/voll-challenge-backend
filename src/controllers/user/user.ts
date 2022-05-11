import { Request, Response } from "express";
import { findUserService, updateCurrencyService } from "../../services/user";
import { IUserNoPassword } from "./user.interface";

export const updateCurrency = async (req: Request, res: Response) => {
  try {
    await updateCurrencyService(req.body, req.body.currency);

    return res.status(200).end();
  } catch(error) {
    return res.status(400).end();
  }
}

export const findUser = async (req: Request, res: Response) => {
  try {
    const user = await findUserService(req.user);
    const userWithNoPassword: IUserNoPassword = {
      ...user,
    };
    delete userWithNoPassword.password;
    
    return res.status(200).json({ data: userWithNoPassword });
  } catch (error) {
    return res.status(404).end();
  }
}
