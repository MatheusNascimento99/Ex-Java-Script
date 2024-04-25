//* Verificação de ano bisexto

// é bisexto se for divisível por 4, ex exceto os que sao por 100 mas nao por 400

const VerificarAnoBi = (ano:number) => {
    if(ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0 ){
        console.log(`${ano} é um ano bissexto`)
    }else{
        console.log(`${ano} não é um ano bissexto`)

    }
}

VerificarAnoBi(2001)