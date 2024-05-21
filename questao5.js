function questao5(){
    var texto = prompt('Escreve a string: ')
    var pos = parseInt(prompt('Posicao do caractere que voce quer remover: '))
    if(pos > texto.length){
        alert("Posicao invalida")
    } else{
        var novoTexto = texto.slice(0, pos) + texto.slice(pos+1)
        var caractere = texto[pos]
        alert(`Caractere removido: ${caractere}`)
        alert(`Texto sem o caractere: ${novoTexto}`)
    } 
}