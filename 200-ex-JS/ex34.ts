//* Impressão dos múltiplos de 3 e 5;

const Multiplos = (): void => {
  let contador: number = 0;

  while (contador !== 100) {
    contador += 1;

    if (contador % 3 === 0 && contador % 5 == 0) {
      console.log("BuzzFizz");
    } else if (contador % 3 === 0) {
      console.log("Fizz");
    } else if (contador % 5 === 0) {
      console.log("Buzz");
    }
  }
};

Multiplos();
