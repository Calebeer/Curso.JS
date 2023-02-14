// if pode ser usado sozinho
// Eu posso ter vários else if
// Só posso ter um else na checagem

const hora = 20;

if (hora >= 0 && hora <= 11 ){
    console.log('Bom dia')
} else if( hora >= 12 && hora <= 17){
    console.log('Boa tarde')
}else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite')
}else{
    console.log('Olá')
}

