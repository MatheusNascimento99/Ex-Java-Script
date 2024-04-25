//* Imprimir o maior  d e3 valores

const maiorValor = (v1:number, v2:number, v3:number) =>{
    if(v1 > v2 && v1 > v3){
        console.log(`O maior valor é ${v1}`)
    }else if(v2 > v1 && v2 > v3){
        console.log(`O maior valor é ${v2}`)
    }else if(v3 > v1 && v3 > v2){
        console.log(`O maior valor é ${v3}`)
    }else if(v1 === v2 || v1 === v3 || v2 === v3){
        console.log(`Não há maior valor,valores iguais, 1º valor = ${v1}, 2º valor = ${v2}, 3º valor = ${v3}`)
    }
}

maiorValor(999,87,89)