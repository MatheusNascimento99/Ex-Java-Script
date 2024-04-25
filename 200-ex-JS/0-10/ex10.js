//! Média / aprovado  / reprovado
var Media = function (Nota1, Nota2) {
    var Media = (Nota1 + Nota2) / 2;
    if (Media > 7) {
        console.log("Aluno aprovado com a m\u00E9dia ".concat(Media));
    }
    else if (Media === 7) {
        console.log("Aluno de recupera\u00E7\u00E3o com a m\u00E9dia ".concat(Media));
    }
    else {
        console.log("Aluno reprovado com a m\u00E9dia ".concat(Media));
    }
};
Media(7, 4);
