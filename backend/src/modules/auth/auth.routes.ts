import { Router } from 'express';
import { AuthController } from './auth.controller.js';

const router = Router();
const controller = new AuthController();

router.post('/login', (req, res) => controller.login(req, res));
router.post('/refresh', (req, res) => controller.refresh(req, res));

export default router;
