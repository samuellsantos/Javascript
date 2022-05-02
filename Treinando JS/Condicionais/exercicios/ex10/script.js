function diaSemana(){
    var dia = document.getElementById('n').value
    var resultado = document.getElementById('res')
    resultado.innerHTML = `Você digitou o número ${dia}, que corresponde a:  `
    if(dia == 1){
        resultado.innerHTML += "<strong>DOMINGO</strong>"
    }else if (dia == 2){
        resultado.innerHTML += "<strong>SEGUNDA - FEIRA</strong>"
    }else if (dia == 3){
        resultado.innerHTML += "<strong>TERÇA - FEIRA</strong>"
    }else if (dia == 4){
        resultado.innerHTML += "<strong>QUARTA - FEIRA</strong>"
    }else if (dia == 5){
        resultado.innerHTML += "<strong>QUINTA - FEIRA</strong>"
    }else if(dia == 6){
        resultado.innerHTML += "<strong>SEXTA - FEIRA</strong>"
    }else if(dia == 7){
        resultado.innerHTML += "<strong>SÁBADO</strong>"
    }else{
        alert("[ERRO] Digite um valor válido!")
        resultado.innerHTML = ""
    }

}