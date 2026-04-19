import { Router } from 'express';
import { FinanzasController } from './finanzas.controller.js';
import { authGuard } from '../../middlewares/auth.js';
import { allowRoles } from '../../middlewares/rbac.js';

const router = Router();
const controller = new FinanzasController();

router.use(authGuard, allowRoles(['Administrador', 'Supervisor', 'Contabilidad']));
router.get('/kpis', (req, res) => controller.kpis(req, res));

export default router;
