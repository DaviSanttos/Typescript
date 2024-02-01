// criando tipos

type Idade = number;

type Pessoa = {
  nome: string,
  idade: Idade;
  salario : number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Davi',
  idade: 1222,
  salario: 2000
}

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida) : Pessoa {
  return { ...pessoa , corPreferida : cor}
}

console.log(setCorPreferida(pessoa, 'Azul'));


export default 1;
