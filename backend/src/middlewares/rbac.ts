import { NextFunction, Request, Response } from 'express';

export function allowRoles(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = (req as Request & { user?: { role: string } }).user?.role;
    if (!role || !roles.includes(role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
}
