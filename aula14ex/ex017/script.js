function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    n = Number(num.value)
    if(n == 0){
        alert('Digite um número válido')
    }else{
        c =1
        tab.innerHTML = ''
        while (c <=10) {

            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }

}