import { Request, Response, NextFunction } from "express";

const requireSellerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  if (!user || !user.isSeller) {
    return res.status(403).json({
      message: "Access denied",
    });
  }

  return next();
};

export  default requireSellerMiddleware 
