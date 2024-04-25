//! Verificador cor semaáforo

const corSemaforo = (cor:string) => {
    if(cor === 'vermelho'){
        console.log(`A cor ${cor}, significa parar.`)
    }else if(cor === 'laranja'){
        console.log(`A cor ${cor}, significa atenção.`)
    }else if(cor === 'verde'){
        console.log(`A cor ${cor}, significa siga em frente.`)
    }else{
        console.log(`A cor ${cor}, não pertence a semáforos.`)
    }
}


corSemaforo('roxo')