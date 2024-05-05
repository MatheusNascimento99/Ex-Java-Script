//* MAIOR NÚMERO PAR E MENOR NÚMERO IMPAR

//!   i =  número do indice, 0,1,2,3...
//!   n[i] =  valor do elemento

const n = [2, 12, 7, 3, 8, 1, 10, 4];
let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < n.length; i++) {              //percorro n vezez, quantia de núnero que esta no array
  if (n[i] % 2 == 0) {                            //n[i] é o valor do elemento dentro do array
    if (n[i] > maiorPar) {
      maiorPar = n[i];                            // se for par, maiorPar q é zero vira o numero do array q é par
    }
  } else {
    if (menorImpar === 0) {
      menorImpar = n[i];                         // se for impar, o primeiro número vai ser o menor
    }else if(n[i] < menorImpar){                // aqui ele avalia com o valor dos outros elementos e fica com o menor
        menorImpar = n[i]
    }
  }

  console.log(menorImpar, "Impar");
  console.log(maiorPar, "Par");
}
