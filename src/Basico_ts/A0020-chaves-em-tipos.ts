type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca']; // pegando o tipo da chave marca no veiculo
  year: Veiculo['ano'];
  name: string;
}

const carro : Car = {
  brand: 'Ford',
  year: '2020',
  name: 'Nome',
}
