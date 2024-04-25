//! Determinar a estação do ano com base no mês

const Estacao = (mes:number) =>{
    if(mes > 0 && mes < 4){
        console.log('A estação é verão')
    }else if(mes > 3 && mes < 8){
        console.log('A estação é outono')
    }else if(mes > 6  && mes < 10){
        console.log('A estação é inverno')
    }else if(mes > 9 && mes < 13){
        console.log('A estação é primavera')
    }
}

Estacao(10)