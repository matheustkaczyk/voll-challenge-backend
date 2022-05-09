import { IUserModel } from "../controllers/user/user.interface";

export {};

declare global {
  namespace Express {
    interface Request {
      user: IUserModel;
    }
  }
}
