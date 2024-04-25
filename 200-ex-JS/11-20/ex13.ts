//! Cálculo IMC

const CalculoImc = (peso:number, altura:number):void =>{
    const conta = peso / (altura * altura)
    const imc = Number(conta.toFixed(2))

    if(imc <= 18.5 ){
        console.log(`${imc} → Abaixo do peso.`)
    }else if(imc > 18.5 && imc <= 24.9 ){
        console.log(`${imc} → Peso ideal.`)
    }else if(imc > 24.9 && imc < 30){
        console.log(`${imc} → Acima do peso.`)
    }else if(imc > 29.9 && imc < 35){
        console.log(`${imc} → Obesidade grau 1.`)
    }else if(imc > 34.9 && imc < 40){
        console.log(`${imc} → Obesidade grau 2.`)
    }else{
        console.log(`${imc} → Obesidade grau 3.`)
    }
}

CalculoImc(160, 1.85)