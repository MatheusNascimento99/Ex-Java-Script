//* Criar programa que "advinhe" o número que o usuário pensou.
var Jogar = function (chute) {
    var numPensado = 99;
    var cont = 0;
    while (chute !== numPensado) {
        cont++;
        chute = Math.floor(Math.random() * 100);
        console.log("Voc\u00EA informou o n\u00FAmero ".concat(numPensado, " e eu chutei o n\u00FAmero ").concat(chute, ", errei, vou tentar novamente!"));
    }
    console.log("Finalmente aceretei, o n\u00FAmero pensado \u00E9 ".concat(chute, ", precisei de ").concat(cont, " tentativas!"));
};
Jogar(95);
