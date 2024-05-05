//* Imprimir o maior  dos 3 valores
var maiorValor = function (v1, v2, v3) {
    if (v1 > v2 && v1 > v3) {
        console.log("O maior valor \u00E9 ".concat(v1));
    }
    else if (v2 > v1 && v2 > v3) {
        console.log("O maior valor \u00E9 ".concat(v2));
    }
    else if (v3 > v1 && v3 > v2) {
        console.log("O maior valor \u00E9 ".concat(v3));
    }
    else if (v1 === v2 || v1 === v3 || v2 === v3) {
        console.log("N\u00E3o h\u00E1 maior valor,valores iguais, 1\u00BA valor = ".concat(v1, ", 2\u00BA valor = ").concat(v2, ", 3\u00BA valor = ").concat(v3));
    }
};
maiorValor(999, 87, 89);
