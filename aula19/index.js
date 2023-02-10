const pessoal = {
    nome:'Calebe',
    sobrenome:'Apollo',
    idade:18,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },
    
    incrementoIdade(){
        this.idade++;
    }
}


pessoal.incrementoIdade()
pessoal.incrementoIdade()
pessoal.fala()


console.log(pessoal.idade)


// function criarPessoa(nome, sobrenome, idade){
//  return{
//     nome:nome,
//     sobrenome:sobrenome,
//     idade:idade
//  }   
// }




// function criarPessoa(nome, sobrenome, idade){
//     return{nome,sobrenome,idade};
// };

// const pessoa1 = criarPessoa('Calebe', 'Apollo',17);
// const pessoa2 = criarPessoa('Apllo', 'Miranda',19);
// const pessoa3 = criarPessoa('Marcos', 'Viin',90);
// console.log(pessoa1.nome, pessoa2.sobrenome,pessoa3.idade );

// const pessoa1 = {
//     nome: 'Calebe',
//     sobrenome:'Apollo',
//     idade:18

// };

// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome)
// console.log(pessoa1.idade)

// const array = [1,2,3];
// array.push(4);
// array[0] = 'Calebe'
// console.log(array)





function meuEscop(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    function recebeEventoForm (evento){
        evento.preventDefault();

        const pessoas = [];

        const nome =  form.querySelector('.nome');
        const sobrenome =  form.querySelector('.sobrenome');
        const peso =  form.querySelector('.peso');
        const altura =  form.querySelector('.altura');

        pessoas.push({
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso : peso.value,
            altura : altura.value
        });
        
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

    }
    
    form.addEventListener('submit', recebeEventoForm);
}


meuEscop()