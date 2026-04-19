import { roundMoney, safeDivide } from '../../utils/money.js';

export const subtotal = (items: Array<{ quantity: number; unitPrice: number }>) =>
  roundMoney(items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0));

export const utilidadBruta = (ventasNetas: number, costoVentas: number) => roundMoney(ventasNetas - costoVentas);

export const margenBruto = (utilidad: number, ventasNetas: number) => roundMoney(safeDivide(utilidad, ventasNetas) * 100);

export const utilidadOperativa = (utilidadB: number, gastosOperativos: number) => roundMoney(utilidadB - gastosOperativos);

export const margenOperativo = (utilidadO: number, ventasNetas: number) => roundMoney(safeDivide(utilidadO, ventasNetas) * 100);

export const ticketPromedio = (ventasNetas: number, tickets: number) => roundMoney(safeDivide(ventasNetas, tickets));

export const rentabilidadProducto = (precioVenta: number, costoUnitario: number) =>
  roundMoney(safeDivide(precioVenta - costoUnitario, precioVenta) * 100);

export const roi = (beneficioNeto: number, inversion: number) => roundMoney(safeDivide(beneficioNeto, inversion) * 100);

export const variacionPorcentual = (actual: number, anterior: number) =>
  roundMoney(safeDivide(actual - anterior, anterior) * 100);

export const cashFlowNeto = (ingresos: number, egresos: number) => roundMoney(ingresos - egresos);
