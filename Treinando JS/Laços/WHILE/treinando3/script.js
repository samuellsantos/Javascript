function contar(){
    var n = 1
    var r = document.getElementById('res')
    
    while(n <= 100){
        if(n%3 == 0){
            r.innerHTML += `${n} <br/>`
        }
        n++
    }
}