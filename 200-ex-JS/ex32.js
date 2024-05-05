//!Jogo pedra papel tesoura
var Jogar = function (escolhaUser, escolhaPC) {
    if (escolhaUser === 'pedra' && escolhaPC === 'tesoura') {
        console.log("Usu\u00E1rio ganhou pois ele escolheu ".concat(escolhaUser, " e computador escolheu ").concat(escolhaPC));
    }
    else if (escolhaUser === 'tesoura' && escolhaPC === 'papel') {
        console.log("Usu\u00E1rio ganhou pois ele escolheu ".concat(escolhaUser, " e computador escolheu ").concat(escolhaPC));
    }
    else if (escolhaUser === 'papel' && escolhaPC === 'pedra') {
        console.log("Usu\u00E1rio ganhou pois ele escolheu ".concat(escolhaUser, " e computador escolheu ").concat(escolhaPC));
    }
    if (escolhaPC === 'pedra' && escolhaUser === 'tesoura') {
        console.log("Computador ganhou pois ele escolheu ".concat(escolhaPC, " e voc\u00EA escolheu ").concat(escolhaUser));
    }
    else if (escolhaPC === 'tesoura' && escolhaUser === 'papel') {
        console.log("Computador ganhou pois ele escolheu ".concat(escolhaPC, " e voc\u00EA escolheu ").concat(escolhaUser));
    }
    else if (escolhaPC === 'papel' && escolhaUser === 'pedra') {
        console.log("Computador ganhou pois ele escolheu ".concat(escolhaPC, " e voc\u00EA escolheu ").concat(escolhaUser));
    }
    else if (escolhaPC === escolhaUser) {
        console.log(" Empate! Computador escolheu ".concat(escolhaPC, " e usu\u00E1rio escolheu ").concat(escolhaUser));
    }
};
Jogar('papel', 'papel');
