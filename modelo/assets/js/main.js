function calculoImc(){
    const cadastros = [];
    
    function recebeCalculo(evento){
        evento.preventDefault()
        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;
        const result = document.querySelector('.resultado');
        const erro = document.querySelector('.erro')
        
        cadastros.push({
            peso:parseFloat(peso),
            altura:parseFloat(altura)
        });
        
        console.log(cadastros);
        const resultado = (parseFloat(peso /(altura *altura))).toFixed(2);
        
        if (resultado == 0 && resultado == 18.5 ){
           nome = "(Abaixo do peso)"
        }else if (resultado >= 18.5 && resultado <= 24.99 ){
            nome = "(Peso normal)"
        }else if (resultado >= 25 && resultado <= 29.9){
            nome = "(Sobrepeso)"
        }else if(resultado >= 30 && resultado <= 34.9){
            nome = "(Obesidade grau 1)"
        }else if (resultado >= 35 && 39.9){
            nome = "(Obesidade grau 2)"
        }else if(document.querySelector('#peso').value === ""  && document.querySelector('#altura').value === ""){
            erro.innerHTML = `Peso inválido`
        }else{
            console.log('nada')
        }
         


        result.innerHTML = `Seu IMC é ${resultado} ${nome} `;
        
        
        

    }
    document.addEventListener('submit',recebeCalculo)
}

calculoImc()