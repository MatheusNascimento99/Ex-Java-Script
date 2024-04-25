//* Usando do-while imprimir números ímpares de 1 a 20
var Teste = function () {
    var i = 0;
    do {
        i++;
        if (i % 2 !== 0) {
            console.log(i);
        }
    } while (i !== 20);
};
Teste();
