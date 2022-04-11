let n = document.getElementById('number')
let r = document.getElementById('res')
let valores = []
let sel = document.getElementById('numbers')




function adicionar(){
    if(n.value > 100){
        alert('ERROR')
    }else{
        valores.push(n.value)
        let val = document.createElement('option')
        val.text = `Valor ${n.value} foi adicionado`
        sel.appendChild(val)
    }

}


function finalizar(){
    valores.sort()
    r.innerHTML = `Ao todo temos ${valores.length} números cadastrados <br>`

}

