function questao6(){
    var num1 = parseInt(prompt(`Primeiro numero (0 a 10): `))
    if(num1 < 0 || num1 > 10){
        alert(`numero invalido: ${num1}`)
    }else{
        var num2 = parseInt(prompt(`Segundo numero (0 a 10): `))
        if(num2 < 0 || num2 > 10){
            alert(`numero invalido: ${num2}`)
        }else{
            var media = (num1 + num2)/2
            alert(`Media = ${media}`)
        }
    }
}