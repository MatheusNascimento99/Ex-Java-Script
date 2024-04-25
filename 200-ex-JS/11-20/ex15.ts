//! Verificar palíndromo

const VerPalindromo = (palavra: string) => {
  let palavraMinuscula = palavra.toLowerCase();
  console.log(palavraMinuscula)
  let palavraInvertida = palavraMinuscula.split("").reverse().join("")
  console.log(palavraInvertida)
  if (palavraInvertida === palavraMinuscula) {
    console.log(`a palavra ${palavra} é um palíndromo.`);
  } else {
    console.log(`a palavra ${palavra} NÃO é um palíndromo.`);
  }
};

VerPalindromo("Reviver");
