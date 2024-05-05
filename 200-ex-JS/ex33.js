//! Sequência de Fibonacci
var Fibonacci = function (numero) {
    var termo1 = 0;
    var termo2 = 1;
    console.log(termo1);
    console.log(termo2);
    for (var i = 3; i != numero; i++) {
        var termo3 = termo1 + termo2;
        console.log(termo3);
        termo1 = termo2;
        termo2 = termo3;
    }
};
Fibonacci(25);
