@decorator

export class Animal {
  constructor(public cor: string){}
}

function decorator<T>(target: T){
  console.log('log dentro do decorator');
  return target;
}

// const AnimalDecorated = decorator(Animal);
const animal = new Animal('roxo');
console.log(animal);
