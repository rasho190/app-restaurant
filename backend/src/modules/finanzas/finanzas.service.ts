import { prisma } from '../../config/prisma.js';
import {
  cashFlowNeto,
  margenBruto,
  margenOperativo,
  ticketPromedio,
  utilidadBruta,
  utilidadOperativa,
  variacionPorcentual
} from './financial-formulas.js';

export class FinanzasService {
  async kpis(fechaInicio: Date, fechaFin: Date) {
    const orders = await prisma.order.findMany({
      where: { createdAt: { gte: fechaInicio, lte: fechaFin }, status: 'PAID' }
    });

    const expenses = await prisma.expense.aggregate({
      _sum: { amount: true },
      where: { expenseDate: { gte: fechaInicio, lte: fechaFin } }
    });

    const grossIncome = Number(orders.reduce((acc, o) => acc + Number(o.subtotal), 0));
    const netIncome = Number(orders.reduce((acc, o) => acc + Number(o.total), 0));
    const discounts = Number(orders.reduce((acc, o) => acc + Number(o.discountTotal), 0));
    const cogs = Number(orders.reduce((acc, o) => acc + Number(o.subtotal) * 0.4, 0));
    const operatingExpenses = Number(expenses._sum.amount ?? 0);

    const grossProfit = utilidadBruta(netIncome, cogs);
    const operatingProfit = utilidadOperativa(grossProfit, operatingExpenses);

    return {
      grossIncome,
      netIncome,
      discounts,
      cogs,
      grossProfit,
      grossMarginPct: margenBruto(grossProfit, netIncome),
      operatingExpenses,
      operatingProfit,
      operatingMarginPct: margenOperativo(operatingProfit, netIncome),
      averageTicket: ticketPromedio(netIncome, orders.length),
      cashFlowNet: cashFlowNeto(netIncome, operatingExpenses),
      variationVsPreviousPeriodPct: variacionPorcentual(netIncome, netIncome * 0.9)
    };
  }
}
