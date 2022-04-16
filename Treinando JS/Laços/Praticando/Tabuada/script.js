function gerar(){
    var n = document.getElementById('number')
    var r = document.getElementById('res')

    for(var cont = 1; cont<=10; cont++){
        r.innerHTML += `${n.value} x ${cont} = ${n.value * cont} <br/>  `
    }

}