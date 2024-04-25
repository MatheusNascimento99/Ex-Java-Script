//! Verificar se número está dentro de um intervalo

const VerificarIntervalo = (num:number, limiteInferior:number, limiteSuperior:number) =>{
    if(num >= limiteInferior && num <= limiteSuperior ){
        console.log(`O nº ${num} informado, está dentro do limite descrito.`)
    }else{
        console.log(`O nº ${num} informado, NÃO está dentro do limite descrito.`)
    }
}


VerificarIntervalo(100, 70, 99)