// redocrd é um generico padrao
const objeto1 : Record<string, string | number> = {
  nome: 'Davi',
  sobrenome: 'Celso',
  idade: 20,
}

console.log(objeto1);

type PessoaProtocol = {
  nome: string;
  sobrenome?: string;
  idade?: number;
}

//required, faz com q seja obrigatorios
type PessoaRequired = Required<PessoaProtocol>;

// partial, faz com q seja opcional
type PessoaPartial = Partial<PessoaRequired>;

// readonly somente leitura
type PessoaReadonly = Readonly<PessoaRequired>;

//pick permite somente os campos escolhidos
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2 : Record<string, string | number> = {
  nome: 'Felipe',
  sobrenome: 'Celso',
  idade: 17,
}

// extract e exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

//computa todos os tipos q estao em ABC q n estao e CDE
type TipoExclude = Exclude<ABC, CDE>;
//computa todos os tipos q estao em ABC q podem ser atribuidos para CDE
type TipoExtract = Extract<ABC, CDE>;


export default 1;
