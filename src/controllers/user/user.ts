import { Request, Response } from "express";
import { findAllUsersService, findUserService, updateCurrencyService } from "../../services/user";

export const updateCurrency = async (req: Request, res: Response) => {
  try {
    await updateCurrencyService(req.body, req.body.currency);

    return res.status(200).end();
  } catch(error) {
    return res.status(400).json((error as Error).message);
  }
}

export const findUser = async (req: Request, res: Response) => {
  try {
    const user = await findUserService(req.user);

    const userWithNoPassword = {
      _id: user._id,
      name: user.name,
      email: user.email,
      balance: user.balance,
      role: user.role,
      created_at: user.created_at
    };
    
    return res.status(200).json({ data: userWithNoPassword });
  } catch (error) {
    return res.status(404).json((error as Error).message);
  }
}

export const findAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await findAllUsersService();

    const usersWithNoPassword = users.map(user => {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        balance: user.balance,
        role: user.role,
        created_at: user.created_at
      }
    }
    );

    return res.status(200).json({ data: usersWithNoPassword });
  } catch (error) {
    return res.status(404).json((error as Error).message);
  }
}

