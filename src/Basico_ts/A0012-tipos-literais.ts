// tipo literal, valor sendo o tipo

let x = 10; // x é do tipo number
x = 12012312;

const y = 10; // y é do tipo 10;

let a: 10 = 10 as const; // a como tipo literal


function escolhaCor(cor: 'Azul' | 'Amarelo' | 'Rosa'){
  return cor;
}

console.log(escolhaCor("Rosa"));


//module mode
export default 1;
