import type * as express from "express";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

// extends the express namespace

declare global {
  namespace Express {
    interface Request {
      userInfo?: JwtPayload;
    }
  }
}

// if you have a custom payload interface , define it

interface JwtPayload {
  email: string;
  password: string;
  iat: number;
  exp: number;
}
