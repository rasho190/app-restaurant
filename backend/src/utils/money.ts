export const roundMoney = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100;

export const safeDivide = (numerator: number, denominator: number) => {
  if (!denominator) return 0;
  return numerator / denominator;
};
