//* Condicional idade de votar
// Voto obrigatório entre 18 e 70
//facultativo 16,16 e acima de 70
// proibido abaixo dos 16
var PodeVotar = function (idade) {
    if (idade < 16) {
        console.log("Proibido votar, idade ".concat(idade, " anos"));
    }
    else if (idade >= 18 && idade <= 70) {
        console.log("Voto obrigat\u00F3rio, idade ".concat(idade, " anos"));
    }
    else {
        console.log("Voto opcioal, idade ".concat(idade, " anos"));
    }
};
PodeVotar(71);
