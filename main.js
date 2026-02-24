'use strict'

function adicionarProduto(){
    const produto = document.getElementById('produto')
    const lista = document.getElementById('lista')
    const spanProduto = document.createElement('span')
    const spanCodigo = document.createElement('span')
    const spanQuantidade = document.createElement('span')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')
    const campoDiv = document.createElement('div')
   
    
    if(produto.value == "" || codigo.value == "" || quantidade.value == ""){
        alert("ERRO: Insira algo nos campos")

    }else{
        spanProduto.textContent = produto.value
        spanCodigo.textContent = codigo.value
        spanQuantidade.textContent = quantidade.value
        
        
        spanProduto.className = 'bg-blue-200 px-8 py-2'
        spanCodigo.className = 'bg-blue-200 px-8 py-2'
        spanQuantidade.className = 'bg-blue-200 px-8 py-2'
        campoDiv.className = "flex gap-2"

        
        campoDiv.appendChild(spanProduto)
        campoDiv.appendChild(spanCodigo)
        campoDiv.appendChild(spanQuantidade)
        

        lista.appendChild(campoDiv)

        produto.value = ""
        codigo.value = ""
        quantidade.value = ""
    }

    


}
