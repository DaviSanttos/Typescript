//void

function semRetorno(...args: string[]): void{
  console.log(args.join(' '));
}

semRetorno('davi','celso');

export const pessoa = {
  nome: 'Davi',
  sobrenome : 'Celso',

  exibirNome() : void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
};

pessoa.exibirNome();
