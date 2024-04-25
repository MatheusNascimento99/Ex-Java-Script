//! Verificar palíndromo
var VerPalindromo = function (palavra) {
    var palavraMinuscula = palavra.toLowerCase();
    console.log(palavraMinuscula);
    var palavraInvertida = palavraMinuscula.split("").reverse().join("");
    console.log(palavraInvertida);
    if (palavraInvertida === palavraMinuscula) {
        console.log("a palavra ".concat(palavra, " \u00E9 um pal\u00EDndromo."));
    }
    else {
        console.log("a palavra ".concat(palavra, " N\u00C3O \u00E9 um pal\u00EDndromo."));
    }
};
VerPalindromo("Reviver");
