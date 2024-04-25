//* Verificador se possui idade para dirigir ou não


const Driver = (idade:number) => {
    if(idade > 17){
        console.log(`Liberado para dirigir, idade é de ${idade} anos`)
    }else{
        console.log(`Não Liberado para dirigir, idade é de ${idade} anos`)
    }
}


Driver(99)