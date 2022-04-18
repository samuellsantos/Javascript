function login(){
    var nome = prompt('Digite o seu nome:').toLowerCase()
    var senha = prompt('Digite a sua senha:').toLowerCase()



    while(senha === nome){
        alert('Sua senha deve ser diferente do seu nome.')
        var senha = prompt('Digite a sua senha:').toLowerCase()
    }
    alert(`Adicionado ao Sistema!`)
}