import { AppError } from "../errors/AppError";
import { validate } from "uuid";
import { NextFunction, Request, Response } from "express";

const ensureUuidIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const UUIdIsValid = validate(id);

  if (!UUIdIsValid) {
    throw new AppError(`this ${id} not valid uuid`, 400);
  }

  next();
};

export default ensureUuidIsValidMiddleware;
