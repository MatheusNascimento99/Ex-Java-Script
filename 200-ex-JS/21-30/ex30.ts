//* Imprimir com for números primos de 1 a 100

for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let div = 2; div < num; div++) {
    if (num % div == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}
