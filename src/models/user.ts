import { IUser, IUserLogin, IUserModel } from '../controllers/user/user.interface';
import UserSchema from '../database/schemas/user';

export const createUser = async (user: IUser) => {
  return await UserSchema.create(user);
}

export const findUser = async (user: IUserLogin) => {
  return await UserSchema.findOne({ email: user.email });
}

export const updateCurrency = async (user: IUser, currency: Number) => {
  return await UserSchema.updateOne({ email: user.email }, { $set: { balance: currency } });
}
