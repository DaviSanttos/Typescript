// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number{
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string{ // saida como string
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[]{ // saida como array de string
  return args.map((valor) => valor.toLocaleUpperCase());
}

const result = multiplicaArgs(1,2,3,4,5,6,7);
const concatenacao = concatenaString('ola','eu','sou','davi');
const upper = toUpperCase('ola','eu','sou','davi');

console.log(result);
console.log(concatenacao);
console.log(upper);
