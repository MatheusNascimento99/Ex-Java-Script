//! Verificar se número está dentro de um intervalo
var VerificarIntervalo = function (num, limiteInferior, limiteSuperior) {
    if (num >= limiteInferior && num <= limiteSuperior) {
        console.log("O n\u00BA ".concat(num, " informado, est\u00E1 dentro do limite descrito."));
    }
    else {
        console.log("O n\u00BA ".concat(num, " informado, N\u00C3O est\u00E1 dentro do limite descrito."));
    }
};
VerificarIntervalo(100, 70, 99);
