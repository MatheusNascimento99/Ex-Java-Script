//! Imprimir números pares de 1 a cem com do-while


let i:number = 0

do{
    i++
    if(i % 2 == 0){
        console.log(i)
    }
}
while(i <= 100)