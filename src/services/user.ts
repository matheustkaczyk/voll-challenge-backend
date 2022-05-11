import { IUserModel } from "../controllers/user/user.interface";
import { findAllUsers, findUser, updateCurrency } from "../models/user";
import dotenv from 'dotenv';

dotenv.config();

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

export const findUserService = async (user: IUserModel) => {
  const found = await findUser(user);

  if (!found) throw new Error('User not found');

  return found;
}

export const findAllUsersService = async () => {
  const found = await findAllUsers();

  if (!found) throw new Error('User not found');
  
  return found;
}
