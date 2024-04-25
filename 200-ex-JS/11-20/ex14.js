//* Verificação de ano bisexto
// é bisexto se for divisível por 4, ex exceto os que sao por 100 mas nao por 400
var VerificarAnoBi = function (ano) {
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        console.log("".concat(ano, " \u00E9 um ano bissexto"));
    }
    else {
        console.log("".concat(ano, " n\u00E3o \u00E9 um ano bissexto"));
    }
};
VerificarAnoBi(2001);
