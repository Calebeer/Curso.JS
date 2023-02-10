
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function recebeEvento(evento){
    evento.preventDefault();
    resultado.innerHTML = `<h2>Cale</h2>`;
    document.querySelector("body > div > form")
}

form.addEventListener('submit', recebeEvento)



const teste = document.querySelector('.teste')
const teste2 = document.querySelector('.teste2')
teste.addEventListener('mouseover', function quandoClicar(){
    console.log('entrou');
    teste2.style.backgroundColor = 'red'
})

teste.addEventListener('mouseout', ()=>{
    console.log('saiu');
    teste2.style.backgroundColor = "#fa4";
})

teste.addEventListener('click', function quandoClicar(){
    console.log('clicou');
    teste2.style.backgroundColor = 'white'
    teste2.style.color = 'white'
})



