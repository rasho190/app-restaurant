import { Request, Response } from 'express';
import { z } from 'zod';
import { ProductsService } from './products.service.js';

const service = new ProductsService();

const categorySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  parentId: z.string().optional()
});

const productSchema = z.object({
  code: z.string().min(2),
  name: z.string().min(2),
  categoryId: z.string(),
  salePrice: z.number().nonnegative(),
  costPrice: z.number().nonnegative(),
  unit: z.string().min(1),
  taxRate: z.number().nonnegative(),
  description: z.string().optional()
});

export class ProductsController {
  async listCategories(_req: Request, res: Response) {
    res.json(await service.listCategories());
  }

  async createCategory(req: Request, res: Response) {
    const input = categorySchema.parse(req.body);
    res.status(201).json(await service.createCategory(input));
  }

  async listProducts(req: Request, res: Response) {
    const search = req.query.search?.toString();
    res.json(await service.listProducts(search));
  }

  async createProduct(req: Request, res: Response) {
    const input = productSchema.parse(req.body);
    res.status(201).json(await service.createProduct(input));
  }
}
