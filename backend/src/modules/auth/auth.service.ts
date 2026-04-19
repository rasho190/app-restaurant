import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/prisma.js';
import { env } from '../../config/env.js';
import { ApiError } from '../../utils/api-error.js';

export class AuthService {
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email }, include: { role: true } });
    if (!user) throw new ApiError(401, 'Credenciales inválidas');

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new ApiError(401, 'Credenciales inválidas');

    const payload = { sub: user.id, role: user.role.name };
    const accessToken = jwt.sign(payload, env.jwtAccessSecret, { expiresIn: env.jwtAccessExpiresIn });
    const refreshToken = jwt.sign(payload, env.jwtRefreshSecret, { expiresIn: env.jwtRefreshExpiresIn });

    return {
      accessToken,
      refreshToken,
      user: { id: user.id, email: user.email, fullName: user.fullName, role: user.role.name }
    };
  }

  refresh(refreshToken: string) {
    try {
      const payload = jwt.verify(refreshToken, env.jwtRefreshSecret) as { sub: string; role: string };
      const accessToken = jwt.sign({ sub: payload.sub, role: payload.role }, env.jwtAccessSecret, {
        expiresIn: env.jwtAccessExpiresIn
      });

      return { accessToken };
    } catch {
      throw new ApiError(401, 'Refresh token inválido');
    }
  }
}
