function extensao(caminho){
    var arquivo = caminho.split("/").pop()
    var extensao = arquivo.split(".").pop()
    alert(`A extensao do arquivo ${arquivo} eh ${extensao}`)
    return extensao
}

function questao2(){
    var caminho1 = "documentos/texto.docx"
    var caminho2 = "documentos/roteiro.pdf"
    
    extensao(caminho1)
    extensao(caminho2)
}
