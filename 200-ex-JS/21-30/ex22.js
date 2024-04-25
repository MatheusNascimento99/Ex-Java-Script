//* Números de dias no mês
var DiasNoMes = function (mes) {
    switch (mes) {
        case 1:
            console.log("O m\u00EAs ".concat(mes, " tem 31 dias"));
            break;
        case 2:
            console.log("O m\u00EAs ".concat(mes, " tem 28 dias"));
            break;
    }
};
DiasNoMes(1);
