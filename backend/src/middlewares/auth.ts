import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export interface JwtPayload {
  sub: string;
  role: string;
}

export function authGuard(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = auth.split(' ')[1];

  try {
    const payload = jwt.verify(token, env.jwtAccessSecret) as JwtPayload;
    (req as Request & { user: JwtPayload }).user = payload;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
