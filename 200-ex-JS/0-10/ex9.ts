//* Verificação se o número é positivo negativo ou neutro(zero)


const Verificar = (valor:number) => {
    if(valor > 0){
        console.log(`O número ${valor} é positivo.`)
    } else if(valor < 0){
        console.log(`O número ${valor} é negativo.`)
    }else{
        console.log(`O número ${valor} é neutro.`)
    }
}

Verificar(305)