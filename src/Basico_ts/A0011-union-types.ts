//dizer ao typescript que um parametro ou variavel pode ser de dois tipos

function addOrConcat(a: number | string, b: number | string){
  if(typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10,11));
console.log(addOrConcat('10','11'));
