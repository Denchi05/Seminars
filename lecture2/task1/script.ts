function power(base: number, exp: number): number {
  return Math.pow(base, exp);
}

const a = 2;
const b = 8;

console.log(`${a}^${b} = ${power(a, b)}`);
