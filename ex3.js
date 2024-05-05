//* SALÁRIO imposto
function percentualComBaseSalarial(salarioBruto) {
    if (salarioBruto >= 0 && salarioBruto <= 1100) {
        return 5;
    } else if (salarioBruto > 1100.01 && salarioBruto <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

function impostoSalario(valor, percentualComBaseSalarial) {
    return valor * (percentualComBaseSalarial / 100);
}

const salarioBruto = 1000;
const percentual = percentualComBaseSalarial(salarioBruto);
const valorTransferir = salarioBruto - impostoSalario(salarioBruto, percentual);

console.log('Salário Bruto:', salarioBruto);
console.log('Percentual:', percentual);
console.log('Imposto Calculado:', impostoSalario(salarioBruto, percentual));
console.log('Valor a Transferir:', valorTransferir);
