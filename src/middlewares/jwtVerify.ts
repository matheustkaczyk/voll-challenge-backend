import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { UserModel } from '../controllers/user/user.interface';

dotenv.config();

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const secret = process.env.SECRET;

  if (token) {
    jwt.verify(token, secret as string, (err, decoded) => {
      if (err) {
        return res.status(401).end();
      } else {
        const { payload }: any = decoded;
        delete payload.password;
        req.user = payload as UserModel;
        next();
      }
    }
    );
  } else {
    return res.status(400).end();
  }
}

