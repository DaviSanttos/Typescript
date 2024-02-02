// type CoresObj = {
//   vermelho: 'red';
//   verde: 'green';
//   azul: 'blue';
// };

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
 vermelho: "red",
 verde: "green",
 azul: 'blue',
 roxo: 'purple'
}

function traduzirCor(cor: CoresChaves, cores: CoresObj){
  return cores[cor];
}

console.log(traduzirCor('azul', coresObj));
