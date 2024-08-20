//Soma Fatorial
const Fatorial = (num) => {
    let fatorial  = 1;
    for (let i = 1; i <= num; i++){
        fatorial*=i
    }
    return console.log(fatorial)
}

Fatorial(5)