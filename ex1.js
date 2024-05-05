//* MÉDIA DE ALUNO



function calcMedia(n1, n2,n3) {
    return (n1 + n2 + n3) / 3
}

const media = calcMedia(7, 7,7)

if(media < 5){
    console.log('Reprovado');
}
else if (media <= 7){
    console.log('Recuperação');
}
else{
    console.log('Aprovado');
}

console.log('Média:', media)


