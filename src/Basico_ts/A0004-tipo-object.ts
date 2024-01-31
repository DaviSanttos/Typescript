const objeto: {
  chaveA: string;
  chaveB: string;
  [key: string]: unknown; // deixar o objeto aberto para criar nova chave: valor
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B'
};

objeto.chaveA = 'Outro valor';
objeto.chaveC = 'novo valor';
