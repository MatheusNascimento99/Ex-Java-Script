//! Sequência de Fibonacci




const Fibonacci = (numero:number):void => {
    let termo1:number = 0
    let termo2:number = 1
    console.log(termo1)
    console.log(termo2)

    for(let i = 3; i != numero; i++){
        let termo3:number = termo1 + termo2
        console.log(termo3)
        termo1 = termo2
        termo2 = termo3
    }
}

Fibonacci(25)