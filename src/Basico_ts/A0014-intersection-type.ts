type TemNome = {nome : string};
type TemSobrenome = {sobrenome : string};
type TemIdade = {idade : number};

type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa : Pessoa = {
  idade: 1,
  nome: 'Davi',
  sobrenome: 'Celso'
}

console.log(pessoa);

export default 1;
