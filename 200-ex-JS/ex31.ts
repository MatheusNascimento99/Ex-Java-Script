//* Criar programa que "advinhe" o número que o usuário pensou.

const Jogar = (chute:number) => {
    let numPensado:number = 99
    let cont:number = 0

    while(chute !== numPensado){
        cont ++
        chute = Math.floor(Math.random() * 100)
        console.log(`Você informou o número ${numPensado} e eu chutei o número ${chute}, errei, vou tentar novamente!`)
    }
    
    console.log(`Finalmente aceretei, o número pensado é ${chute}, precisei de ${cont} tentativas!`)
}
Jogar(95)
 





