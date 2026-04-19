import { Request, Response } from 'express';
import { z } from 'zod';
import { FinanzasService } from './finanzas.service.js';

const service = new FinanzasService();

const querySchema = z.object({
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional()
});

export class FinanzasController {
  async kpis(req: Request, res: Response) {
    const parsed = querySchema.parse(req.query);
    const to = parsed.to ? new Date(parsed.to) : new Date();
    const from = parsed.from ? new Date(parsed.from) : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    res.json(await service.kpis(from, to));
  }
}
