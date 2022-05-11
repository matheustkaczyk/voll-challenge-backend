import { IUser, IUserLogin, IUserModel } from "../controllers/user/user.interface";
import { createUser, findUser, updateCurrency } from "../models/user";
import { jwtSign } from "../utils/jwtSign";
import dotenv from 'dotenv';
import md5 from "md5";

dotenv.config();

export const signUpService = async (user: IUser) => {
  user.password = md5(user.password);
  return await createUser(user);
}

export const signInService = async (user: IUserLogin): Promise<string | undefined> => {
  const found = await findUser(user);
  const hashedPassword = md5(user.password);
  let result;

  if (found) {
    if (found.password === hashedPassword) {
      result = jwtSign(found, process.env.SECRET);
    }
  }

  if (!result) {
    throw new Error('Invalid credentials');
  }

  return result;
}

export const updateCurrencyService = async (user: IUserModel, currency: String): Promise<any> => {
  const found = await findUser(user);
  let newCurrency: Number = 0;

  if (found) {
    const getOperator = currency.split('')[0];

    if (getOperator === '+') {
      newCurrency = found.balance += Number(currency.split('').slice(1).join(''));
    } else if (getOperator === '-' && found.balance >= Number(currency.split('').slice(1).join(''))) {
      newCurrency = found.balance -= Number(currency.split('').slice(1).join(''));
    } else {
      throw new Error('You don\'t have enough money');
    }
    return await updateCurrency(found, newCurrency);
  }

  throw new Error('User not found');
}

export const findUserService = async (user: IUserModel): Promise<IUser> => {
  const found = await findUser(user);

  if (!found) throw new Error('User not found');

  return found;
}
