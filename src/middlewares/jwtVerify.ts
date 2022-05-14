import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IUserModel } from '../controllers/user/user.interface';

dotenv.config();

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  const secret = process.env.SECRET;

  if (token) {
    if (token.split(' ').length === 2) {
      token = token.split(' ').slice(1).join(' ');
    }

    jwt.verify(token, secret as string, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).end();
      } else {
        const { payload }: any = decoded;
        delete payload.password;
        req.user = payload as IUserModel;
        next();
      }
    }
    );
  }
}

