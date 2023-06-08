import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodTypeAny } from "zod";

const verifySchemaMiddleware =
  (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction) => {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      return next();
  };

export default verifySchemaMiddleware;
