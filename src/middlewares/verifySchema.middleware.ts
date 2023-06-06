import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

const verifySchemaMiddleware =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      return next();
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        return res.status(400).json({ error: error });
      }
    }
  };

export default verifySchemaMiddleware;
