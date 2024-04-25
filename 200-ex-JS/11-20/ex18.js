//* Verificador se possui idade para dirigir ou não
var Driver = function (idade) {
    if (idade > 17) {
        console.log("Liberado para dirigir, idade \u00E9 de ".concat(idade, " anos"));
    }
    else {
        console.log("N\u00E3o Liberado para dirigir, idade \u00E9 de ".concat(idade, " anos"));
    }
};
Driver(99);
