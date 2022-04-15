function somar(){
    var r = document.getElementById('res')
    var soma = 0
    for(var valor = 1; valor <= 1000; valor++){
        soma += valor
        r.innerHTML += `${soma} <br/>`
    }
}