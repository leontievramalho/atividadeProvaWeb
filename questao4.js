function questao4(){
    var num1 = parseInt(prompt('Digite um numero: '))
    var num2 = parseInt(prompt('Digite outro numero: '))
    var soma = num1+num2
    if(num1 == num2){
        alert(`(${num1} + ${num2}) x 2 = ${(soma)*2}`)
    }else{
        alert(`${num1} + ${num2} = ${soma}`)
    }
}