
//Tipos básicos (aqui ocorre inferência de tipos)
let nome: String = 'davi'; // qualquer tipo de strings
let idade: number = 30; // 10, 20, 1.56, -3.33, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
//let big: 10n; //bigint

//Arrays

let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['a','b','c'];
let arrayDeStrings2: string[] = ['a','b','c'];

//Objetos
let pessoa: {nome: string, idade:number, adulto?: boolean} ={
  idade: 12,
  nome: 'davi'
};


// Funçoes
function soma(x: number, y: number){
  return x + y;
}


const soma2: (x: number, y:number) => number = (x,y) => x + y;

