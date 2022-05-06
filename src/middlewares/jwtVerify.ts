import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { User } from '../controllers/user/user.interface';

dotenv.config();

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const secret = process.env.secret;

  if (token) {
    jwt.verify(token, secret as string, (err, decoded) => {
      if (err) {
        res.status(401).end();
      } else {
        req.user = decoded as User;
        next();
      }
    }
    );
  } else {
    res.status(400).end();
  }
}

