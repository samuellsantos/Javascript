function fatorial(){
    var numberF = document.getElementById('numberF')
    var n = Number(numberF.value)
    var r = document.getElementById('res')
    var resultado = 1
    r.innerHTML = `Fatorial de ${n} = `


    for(var contagem = 1; contagem <= n; contagem++){
        resultado *= contagem
        r.innerHTML = `${resultado} <br/>`
    }
     
}