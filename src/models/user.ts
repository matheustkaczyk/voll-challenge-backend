import { User, UserLogin } from '../controllers/user/user.interface';
import UserSchema from '../database/model';

export const createUser = async (user: User): Promise<any> => {
  return await UserSchema.create(user);
}

export const findUser = async (user: UserLogin): Promise<UserLogin | null> => {
  return await UserSchema.findOne({ email: user.email });
}