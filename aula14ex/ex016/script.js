function contar(){
    var numInicio = document.getElementById('inicio')
    var inicio = Number(numInicio.value)
    var numFim = document.getElementById('fim')
    var fim = Number(numFim.value)
    var numPasso = document.getElementById('passo')
    var passo = Number(numPasso.value)
    var contagem = document.getElementById('contagem')

    contagem.innerHTML = 'Contando....'
    if(inicio < fim && passo > 0){
        for( var c = inicio; c <= fim; c += passo){
        contagem.innerHTML += ` ${c}`
        }
    }else if (inicio > fim && passo > 0){
        for(var c = inicio; c >= fim; c -= passo){
            contagem.innerHTML += ` ${c}`
        }
    }
    else{
        alert(`[ERROR]`)
        contagem.innerHTML = 'Impossível contar'
    }


}
