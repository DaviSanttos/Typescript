type FilterCallback<U> = (
  value: U,
  index?: number,
  array?: U[],
 ) => boolean;


function meuFilter<T>(array: T[], calbackfn: FilterCallback<T>){
  const newArray = [];

  for (let i = 0; i < array.length; i++){
    if(calbackfn(array[i])){
      newArray.push(array[i]);
    }
  }
};

const array = [1,2,3,4,5,6];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array,(value) => value < 5);
console.log(arrayFiltradoOriginal);
