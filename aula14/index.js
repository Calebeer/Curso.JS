//IEEE 754-2008
let num1 = 0.7; //nunber
let num2 = 0.1; //number

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3 dd

num1 = parseFloat(num1.toFixed(2));
console.log(num1)
console.log(Number.isInteger(num1))

// console.log(num1 + num2);
// num1 = num1.toString(); // Para transformar em String
// console.log(num1.toString(2)) // para transformar o número em binário;
// console.log(num1.toFixed(2)); // Para arredondar o número;
console.log(Number.isInteger(num1)) // Para ver se ele é um número inteiro ou não
// let tempo = num1 * '5'
// console.log(Number.isNaN(tempo)); // Para ver se a string NÃO É UM NÚMERO//
