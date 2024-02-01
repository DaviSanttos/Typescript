type MapStringsCallback = (item : string) => string;


function mapString(arry: string[], callbackfn: MapStringsCallback) : string[]{
  const newArray : string[] = [];

  for(let i = 0; i < arry.length; i++){
    newArray.push(callbackfn(arry[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toLocaleUpperCase());


console.log(abcMapped);
