//*Classificação aluno pela nota
var ClassificarAluno = function (nota) {
    if (nota > 89) {
        console.log("A nota ".concat(nota, " corresponde a um A."));
    }
    else if (nota > 79) {
        console.log("A nota ".concat(nota, " corresponde a um B."));
    }
    else if (nota > 69) {
        console.log("A nota ".concat(nota, " corresponde a um C."));
    }
    else if (nota > 59) {
        console.log("A nota ".concat(nota, " corresponde a um D."));
    }
    else if (nota > 59) {
        console.log("A nota ".concat(nota, " corresponde a um E."));
    }
    else if (nota < 60) {
        console.log("A nota ".concat(nota, " corresponde a um F."));
    }
};
ClassificarAluno(94);
