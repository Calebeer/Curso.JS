const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
// texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}  </p>
//     <p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
//     <p>É NaN: ${isNaN(numero)}</p>
//     <p>Arredondando para baixo: ${Math.floor(numero)} </p>
//     <p>Arredondando para cima: ${Math.ceil(numero)}</p>
//     <p> Com duas casas decimais: ${numero.toFixed(2)}`;

                 // OU

texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}  </p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>É NaN: ${isNaN(numero)}</p>`;
texto.innerHTML +=  `<p>Arredondando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML +=  ` <p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}`;





// document.body.innerHTML += `<h1>Seu número é ${numero} </h1> <br/>`
// document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)} <br/>`
// document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br/>`
// document.body.innerHTML += `É NaN: ${isNaN(numero)} <br/>`
// document.body.innerHTML += `Arredondado para baixo: ${Math.floor(numero)} <br/>`
// document.body.innerHTML += `Arredondado para cima: ${Math.ceil(numero)} <br/>`
// document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br/>`
