function PA(){
    var ti = document.getElementById('tinicial')
    var ra = document.getElementById('razão')
    var termo = document.getElementById('termo')
    var r = document.getElementById('res')
    r.innerHTML += `Termo 1: ${ti.value} <br/>`

    for(var t = 2; t<= termo.value; t++, ti.value = resultado){
        r.innerHTML += `Termo ${t}: ${Number(ti.value) + Number(ra.value)}<br/>`
        var resultado = Number(ti.value) + Number(ra.value)
    }
      
}