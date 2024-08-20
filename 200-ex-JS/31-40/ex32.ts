//!Jogo pedra papel tesoura
const Jogar = (escolhaUser:string, escolhaPC:string) => {
    if(escolhaUser === 'pedra' && escolhaPC === 'tesoura'){
        console.log(`Usuário ganhou pois ele escolheu ${escolhaUser} e computador escolheu ${escolhaPC}`)
    }else if(escolhaUser === 'tesoura' && escolhaPC === 'papel'){
        console.log(`Usuário ganhou pois ele escolheu ${escolhaUser} e computador escolheu ${escolhaPC}`)
    }else if(escolhaUser === 'papel' && escolhaPC === 'pedra'){
        console.log(`Usuário ganhou pois ele escolheu ${escolhaUser} e computador escolheu ${escolhaPC}`)
    }if(escolhaPC === 'pedra' && escolhaUser === 'tesoura'){
        console.log(`Computador ganhou pois ele escolheu ${escolhaPC} e você escolheu ${escolhaUser}`)
    }else if(escolhaPC === 'tesoura' && escolhaUser === 'papel'){
        console.log(`Computador ganhou pois ele escolheu ${escolhaPC} e você escolheu ${escolhaUser}`)
    }else if(escolhaPC === 'papel' && escolhaUser === 'pedra'){
        console.log(`Computador ganhou pois ele escolheu ${escolhaPC} e você escolheu ${escolhaUser}`)
    }else if(escolhaPC === escolhaUser){
        console.log(` Empate! Computador escolheu ${escolhaPC} e usuário escolheu ${escolhaUser}`)
    }
}
Jogar('papel', 'papel')