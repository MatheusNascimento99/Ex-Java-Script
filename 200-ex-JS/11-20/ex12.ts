//! Média / aprovado  / reprovado



const Media = (Nota1:number, Nota2:number):void => {
    const Media:number = (Nota1 + Nota2 ) / 2
        if(Media > 7 ){
            console.log(`Aluno aprovado com a média ${Media}`)
        }else if(Media === 7 ){
            console.log(`Aluno de recuperação com a média ${Media}`)
        }else{
            console.log(`Aluno reprovado com a média ${Media}`)
        }
    
    }
    
    Media(7,7)