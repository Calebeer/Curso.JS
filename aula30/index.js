// //const form = document.querySelector('.container')
// //const resultado = document.querySelector('.texto')
// function semanaDia(diaSemana){
// let diaSemanaTexto

// switch(diaSemana){
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;
//     case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         return diaSemanaTexto;
//     case 2:
//         diaSemanaTexto = 'Terça-feira';
//         return diaSemanaTexto;
//     case 3:
//         diaSemanaTexto = 'Quarta-feira';
//         return diaSemanaTexto;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         return diaSemanaTexto;
//     case 5:
//         diaSemanaTexto = 'Sexta-feira';
//         return diaSemanaTexto;
//     case 6: 
//         diaSemanaTexto = 'Sábado'
//         return diaSemanaTexto;
// }
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`;
// }

// function textoSemana(){
//     const data = new Date()
//     let diaSemana = data.getDay();
//     const diaSemanaTexto = semanaDia(diaSemana)

//     console.log(diaSemanaTexto)
//     //resultado.innerHTML = diaSemanaTexto
//     return diaSemanaTexto
    
// }

// function diaMes(mesDia){
// let diaMesTexto;

// switch(mesDia){
//     case 0:
//         diaMesTexto = 'Janeiro'
//         return diaMesTexto
//     case 1:
//         diaMesTexto = 'Fevereiro'
//         return diaMesTexto
//     case 2:
//         diaMesTexto = 'Março'
//         return diaMesTexto
//     case 3:
//         diaMesTexto = 'Abril'
//         return diaMesTexto
//     case 4:
//         diaMesTexto = 'Maio'
//         return diaMesTexto
//     case 5:
//         diaMesTexto = 'Junho'
//         return diaMesTexto
//     case 6:
//         diaMesTexto = 'Julho'
//         return diaMesTexto
//     case 7:
//         diaMesTexto = 'Agosto'
//         return diaMesTexto
//     case 8:
//         diaMesTexto = 'setembro'
//         return diaMesTexto
//     case 9:
//         diaMesTexto = 'Outubro'
//         return diaMesTexto
//     case 10:
//         diaMesTexto = 'Novembro'
//         return diaMesTexto
//     case 11:
//         diaMesTexto = 'Dezembro'
//         return diaMesTexto
// }
// }

// function textoMes(){
//     const data = new Date()
//     let mesDia = data.getMonth();
//     const diaMesTexto = diaMes(mesDia)

//     console.log(diaMesTexto)
//     //resultado.innerHTML = diaMesTexto
//     return diaMesTexto
// }

// function diaDoMes(){
//     const data = new Date();
//     let diaDoMes = data.getDate();
//     console.log(diaDoMes)
//     return diaDoMes
// }

// function ano(){
//     const data = new Date();
//     let ano = data.getFullYear()
//     console.log(ano)
//     return ano
// }

// function hora(){
//     const data = new Date();
//     let hora = zeroAEsquerda(data.getHours());
//     let min = zeroAEsquerda(data.getMinutes());
//     let completo = `${hora}:${min}`
//     console.log(`${hora}:${min}`)
//     return completo
// }

// function texto(){
//     const resultado = document.querySelector('.texto')
//      const semana = textoSemana();
//      const dia = diaDoMes();
//      const mes = textoMes();
//      const esse = ano();
//      const horaH = hora();

//     resultado.innerHTML = `${semana}, ${dia} de ${mes} de ${esse} <br> ${horaH} `
    

// }


// texto()
// hora()
// ano()
// diaDoMes()
// textoMes()
// textoSemana()


// function nomeMes(numeroMes){
//     const mes = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
//     return mes [numeroMes]
// }

// function diaSemana(diaSemanaAqui){
//     const diasSemana = ['segunda','terça','quarta','quinta','sexta','sábado','domingo']
//     return diasSemana [diaSemanaAqui]
// }


const resultado = document.querySelector('.texto')
const data = new Date();
const opcoes = {
    dateStyle:'full',
    timeStyle:'short'
};
resultado.innerHTML = data.toLocaleString('pt-BR', opcoes)