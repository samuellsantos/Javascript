function action(){
    var nome = prompt('Digite o seu nome no campo abaixo:')
    
    var resultado = prompt(`Olá ${nome}, qual turno você estuda ?  Considere M-Matutino V-Verspertino N-Noturno`).toLowerCase()

    if(resultado == 'm'){
        alert('Bom Dia!')
    }else if(resultado == 'v'){
        alert('Boa Tarde!')
    }else if(resultado == 'n'){
        alert('Boa Noite!')
    }

    else{
        while(resultado != 'm' && resultado != 'v' && resultado != 'n'){
            alert('[ERRO] Digite um valor válido')
            var resultado = prompt(`Qual turno você estuda ?  Considere M-Matutino V-Verspertino N-Noturno`).toLowerCase()
        }
        if(resultado == 'm'){
            alert('Bom Dia!')
        }
        if(resultado == 'v'){
            alert('Boa Tarde!')
        }
        if(resultado == 'n'){
            alert('Boa Noite!')
        }
    }
}