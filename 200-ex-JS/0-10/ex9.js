//* Verificação se o número é positivo negativo ou neutro(zero)
var Verificar = function (valor) {
    if (valor > 0) {
        console.log("O n\u00FAmero ".concat(valor, " \u00E9 positivo."));
    }
    else if (valor < 0) {
        console.log("O n\u00FAmero ".concat(valor, " \u00E9 negativo."));
    }
    else {
        console.log("O n\u00FAmero ".concat(valor, " \u00E9 neutro."));
    }
};
Verificar(305);
