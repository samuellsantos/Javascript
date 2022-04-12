let num = document.getElementById('number')
let r = document.getElementById('res')
let valores = []
let sel = document.getElementById('numbers')



function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}


function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        sel.appendChild(item)
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()

}


function finalizar(){
    if(valores.lenght == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        var tot = valores.lenght
        r.innerHTML = ''
        r.innerHTML += ` Ao todo temos ${valores.lenght} números cadastrados. `
    }

}

