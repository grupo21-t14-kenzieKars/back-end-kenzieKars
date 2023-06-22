import { Request, Response, NextFunction } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/AppError";

const ensureauthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError("Invalid token");
  }

  const splitToken = token.split(" ")[1];

  jwt.verify(
    splitToken,
    process.env.SECRET_KEY!,
    (error: VerifyErrors | null, decoded: any) => {
      if (error) {
        throw new AppError("Invalid token");
      }

      const user = {
        user_id: decoded.user_id,
        is_seller: decoded.is_seller,
      };

      res.locals.user = user;

      return next();
    })
};

export default ensureauthMiddleware;
