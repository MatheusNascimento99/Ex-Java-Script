//* Condicional idade de votar

// Voto obrigatório entre 18 e 70
//facultativo 16,16 e acima de 70
// proibido abaixo dos 16

const PodeVotar = (idade:number) => {
    if(idade < 16 ){
        console.log(`Proibido votar, idade ${idade} anos`)
    }else if(idade >= 18 && idade <= 70){
        console.log(`Voto obrigatório, idade ${idade} anos`)
    }else{
        console.log(`Voto opcioal, idade ${idade} anos`)
    }

}

PodeVotar(71)