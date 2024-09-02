import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
type Middleware = (req: Request, res: Response, next: NextFunction) => Promise<Response<any> | void>;
export default function (schema: AnySchema): Middleware;
export {};
