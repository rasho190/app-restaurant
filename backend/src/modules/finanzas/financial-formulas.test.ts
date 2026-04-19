import {
  cashFlowNeto,
  margenBruto,
  rentabilidadProducto,
  roi,
  subtotal,
  ticketPromedio,
  variacionPorcentual
} from './financial-formulas';

describe('financial formulas', () => {
  it('subtotal should work', () => {
    expect(subtotal([{ quantity: 2, unitPrice: 10 }, { quantity: 1, unitPrice: 5 }])).toBe(25);
  });

  it('safe percentages should handle zero', () => {
    expect(margenBruto(10, 0)).toBe(0);
    expect(ticketPromedio(100, 0)).toBe(0);
  });

  it('returns expected metrics', () => {
    expect(rentabilidadProducto(20, 10)).toBe(50);
    expect(roi(100, 200)).toBe(50);
    expect(variacionPorcentual(120, 100)).toBe(20);
    expect(cashFlowNeto(500, 120)).toBe(380);
  });
});
