// checar para refinar os tipos
function add(a: unknown, b: unknown){
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1,5));

type Pessoa = { nome : string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal){
  if('nome' in obj)console.log(obj.nome);
};


mostraNome(new Aluno('Davi'));
