import { Request, Response } from 'express';
import { z } from 'zod';
import { AuthService } from './auth.service.js';

const authService = new AuthService();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const refreshSchema = z.object({
  refreshToken: z.string().min(10)
});

export class AuthController {
  async login(req: Request, res: Response) {
    const input = loginSchema.parse(req.body);
    const result = await authService.login(input.email, input.password);
    res.json(result);
  }

  async refresh(req: Request, res: Response) {
    const input = refreshSchema.parse(req.body);
    const result = authService.refresh(input.refreshToken);
    res.json(result);
  }
}
