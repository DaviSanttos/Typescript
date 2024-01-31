let x: unknown;
// com o tipo unknown voce deve especificar(fazer o estreitamento) o tipo antes de qualquer operaçao
x = 100;
x = 'Luiz';

const y = 11000;


if(typeof x === 'number') console.log(x + y);
