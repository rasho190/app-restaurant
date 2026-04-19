import { Router } from 'express';
import { ProductsController } from './products.controller.js';
import { authGuard } from '../../middlewares/auth.js';

const router = Router();
const controller = new ProductsController();

router.use(authGuard);
router.get('/categories', (req, res) => controller.listCategories(req, res));
router.post('/categories', (req, res) => controller.createCategory(req, res));
router.get('/', (req, res) => controller.listProducts(req, res));
router.post('/', (req, res) => controller.createProduct(req, res));

export default router;
