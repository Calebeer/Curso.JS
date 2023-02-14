function calculoImc(){
    const cadastros = [];

    function recebeCalculo(evento){
        evento.preventDefault()
        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;
        const result = document.querySelector('.resultado');
    
        
        cadastros.push({
            peso:parseFloat(peso),
            altura:parseFloat(altura)
        });
        
        console.log(cadastros);
        const resultado = ((peso / altura)** 2);
        
        result.innerHTML = `Seu IMC é ${resultado} <br>`;
    
        
        

    }
    document.addEventListener('submit',recebeCalculo)
}

calculoImc()