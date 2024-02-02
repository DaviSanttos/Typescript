interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'felipe',
  idade: 17,
  sobrenome: 'celso',
}

const aluno2: PessoaProtocolo<string, string> = {
  nome: 'davi',
  idade: '20',
  sobrenome: 'celso',
}

console.log(aluno1,aluno2);
