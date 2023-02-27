function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function criaData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const min = zeroAEsquerda(data.getMinutes());
    const hora = zeroAEsquerda(data.getHours());
    const ano = zeroAEsquerda(data.getFullYear());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = criaData(data);
console.log(dataBrasil);



// const date = new Date(2023, 4, 12, 12, 34);
// console.log(date.toString())