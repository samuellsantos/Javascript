function escrever(){
    var r = document.getElementById('res')

    for(var i = 0; i <=10; i++){
        r.innerHTML += `${i}  <br/>`
        r.style.alignItems = 'center'
    }
}