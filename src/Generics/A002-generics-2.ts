const arrayNumeros: Array<number> = [1,2,3,4,5,6,7];
console.log(arrayNumeros);

async function promisseAsync(){
  return 1;
}

promisseAsync().then(resultado => console.log(resultado + 1));

function minhaPromisse(): Promise<number>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

minhaPromisse().then((resultado) => console.log(resultado + 1));
