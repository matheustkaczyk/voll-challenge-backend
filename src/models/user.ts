import { User } from '../controllers/user/user.interface';
import UserSchema from '../database/model';

export const createUser = async (user: User): Promise<User> => {
  return await UserSchema.create(user);
}