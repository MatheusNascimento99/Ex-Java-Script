//! Tabuada qualquer número
var Tabuada = function (numero) {
    for (var i = 0; i <= 10; i++) {
        console.log("".concat(i, " x ").concat(numero, " ="), numero * i);
    }
};
Tabuada(5);
console.log(' ');
var Tabuada2 = function (num) {
    for (var i = 0; i <= num; i++) {
        console.log("".concat(i, " x ").concat(num, " ="), num * i);
    }
};
Tabuada2(5);
