import { NextFunction, Request, Response } from "express";

export default (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.user.role === role) {
      next();
    }
    else {
      res.status(403).json({
        message: "You don't have the required permissions to perform this action"
      });
    }
  }
}
