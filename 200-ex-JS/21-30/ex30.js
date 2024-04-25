//* Imprimir com for números primos de 1 a 100
for (var num = 2; num <= 100; num++) {
    var isPrime = true;
    for (var div = 2; div < num; div++) {
        if (num % div == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}
