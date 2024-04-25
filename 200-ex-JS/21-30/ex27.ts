//! Tabuada qualquer número até 10


const Tabuada = (numero:number) =>{
    for(let i = 0; i <= 10; i++){
        console.log(`${i} x ${numero} =`, numero * i)
    }
}

Tabuada(5)

console.log(' ') //espaço para ver melhor no console.


//! Tabuada qualquer número até o número informado

const Tabuada2 = (num:number) =>{


    for(let i = 0; i <= num; i++){
        console.log(`${i} x ${num} =`, num * i)
    }
}

Tabuada2(5)

