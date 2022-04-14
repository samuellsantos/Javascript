function contar(){
    var num = 2
    var r = document.getElementById('res')

    while(num <= 100){
        r.innerHTML += num + '<br/>'
        num += 2
    }
}