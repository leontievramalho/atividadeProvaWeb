function questao10(){
    let num1 = parseInt(prompt('Primeiro numero: '))
    let num2 = parseInt(prompt('Segundo numero: '))
    var conteudo = document.getElementById('soma')
    conteudo.innerHTML = `Soma = ${num1 + num2}` 
}