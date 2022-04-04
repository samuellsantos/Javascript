function contar(){
    var numInicio = document.getElementById('inicio')
    var inicio = Number(numInicio.value)
    var numFim = document.getElementById('fim')
    var fim = Number(numFim.value)
    var numPasso = document.getElementById('passo')
    var passo = Number(numPasso.value)
    var contagem = document.getElementById('contagem')
    if (inicio < fim && passo != 0){
        for (;inicio <= fim; inicio+=passo){
            alert(`${inicio}`)
            contagem.textContent = `${inicio}`
            contagem.textContent = `${inicio}`
        }
    }else{
        alert('[ERROR]')
    }


}
