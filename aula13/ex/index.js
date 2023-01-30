const nome = prompt('Digite seu nome completo:');
let espacos = nome.replace(/ /g, ""); // pra tirar os espaços
let tamanho = espacos.length;
let segundaLetra = nome.substr(1,1);// Ou nome[1]
let primeiroIndice = nome.indexOf('a') + 1;
let segundoIndice = espacos.lastIndexOf('a') ;
let ultimasLetras = nome.slice(-3); // Ou (-3,nome.lenght)
let nomeGrande = nome.toUpperCase();
let palavras = nome.split(' ')
let nomePequeno = nome.toLowerCase();




        document.body.innerHTML += `O seu nome é :<strong>${nome}</strong> <br />`
        document.body.innerHTML += `Seu nome tem :<strong>${tamanho}  </strong> letras <br />`
        document.body.innerHTML += `A segunda letra do seu nome é::<strong> ${segundaLetra}</strong>  <br />`
        document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? :<strong>${primeiroIndice}</strong>   <br />`
        document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? :<strong>${segundoIndice}</strong>  <br />`
        document.body.innerHTML += `As últimas 3 letras do seu nome são::<strong> ${ultimasLetras}</strong>  <br />`
        document.body.innerHTML += `As palavras do seu nome são:${palavras}<br />`
        document.body.indnerHTML += `Seu nome com letras maiúsculas::<strong> ${nomeGrande}</strong> <br />`
        document.body.innerHTML += `Seu nome com letras minúsculas::<strong> ${nomePequeno}</strong> <br />`