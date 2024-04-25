//! Cálculo IMC
var CalculoImc = function (peso, altura) {
    var conta = peso / (altura * altura);
    var imc = Number(conta.toFixed(2));
    if (imc <= 18.5) {
        console.log("".concat(imc, " \u2192 Abaixo do peso."));
    }
    else if (imc > 18.5 && imc <= 24.9) {
        console.log("".concat(imc, " \u2192 Peso ideal."));
    }
    else if (imc > 24.9 && imc < 30) {
        console.log("".concat(imc, " \u2192 Acima do peso."));
    }
    else if (imc > 29.9 && imc < 35) {
        console.log("".concat(imc, " \u2192 Obesidade grau 1."));
    }
    else if (imc > 34.9 && imc < 40) {
        console.log("".concat(imc, " \u2192 Obesidade grau 2."));
    }
    else {
        console.log("".concat(imc, " \u2192 Obesidade grau 3."));
    }
};
CalculoImc(160, 1.85);
