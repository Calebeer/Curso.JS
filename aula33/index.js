const pessoa = {
    nome: 'Calebe',
    sobrenome: 'Apollo',
    idade: 18,
    endereco:{
        rua: 'Rua do cotoevelo',
        bairro: 'Cangalheiro',
        numero: '1030'
    } 

}

//Atribuição via desistruturação
const { nome: p, ...resto} = pessoa

console.log(p, resto);