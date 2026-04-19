import 'dotenv/config';

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET ?? 'change_me_access',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET ?? 'change_me_refresh',
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '7d'
};
