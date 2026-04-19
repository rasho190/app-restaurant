import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes.js';
import productRoutes from '../modules/products/products.routes.js';
import finanzasRoutes from '../modules/finanzas/finanzas.routes.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'restaurant-backend' });
});

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/finanzas', finanzasRoutes);

export default router;
