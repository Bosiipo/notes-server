import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response<any> | void>;

export default function (schema: AnySchema): Middleware {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const values = await schema.validate(req.body);
      req.body = values;
      return next();
    } catch (error: any) {
      return res.status(400).json({
        status: false,
        error: error.errors,
      });
    }
  };
}
// "build": "tsc",
// "start": "node dist/server.js",
// "dev": "nodemon server.ts",
