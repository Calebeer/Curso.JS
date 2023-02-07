/*Primitivos ( imutáveis) - string, number, boolean, undefined, mull (bigint, symbol) - valores copiados

Referência (mutável) array, object, function - Passados por referência*/

let a = [1,2,3];
let b = a;
let c = b;

console.log(a,b);

  a.push(4);
console.log(b,a)

//...a -> Para copiar o valor.
