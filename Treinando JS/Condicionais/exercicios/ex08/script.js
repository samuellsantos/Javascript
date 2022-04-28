var limparBtn = document.getElementById('limpar')
limparBtn.style.display = 'none'
function script(){
    var Salario = document.getElementById('n')
    var salario = Number(Salario.value)
    var resultado = document.getElementById('res')
    limparBtn.style.display = 'inline'
    if(salario > 0){
        /* SALARIOS ATÉ R$280,00 */
        if(salario <= 280){
            let percentual = '20%'
            let valorAumento = (salario *20)/100
            let total = salario + valorAumento
            resultado.innerHTML = `Salário antes do reajuste: <strong>R$${salario}</strong> ;<br>`
            resultado.innerHTML += `Percentual de aumento aplicado: <strong>${percentual}</strong>;<br>`
            resultado.innerHTML += `Valor do aumento: <strong>R$${valorAumento}</strong>; <br>`
            resultado.innerHTML += `O valor após o aumento é de: <strong>R$${total}</strong>;`
        }

        /* SALÁRIOS ENTRE 280 E 700 */
        else if(salario > 280 && salario <= 700){
            let percentual = '15%'
            let valorAumento = (salario * 15)/100
            let total = salario + valorAumento
            resultado.innerHTML = `Salário antes do reajuste: <strong>R$${salario},00</strong> ;<br>`
            resultado.innerHTML += `Percentual de aumento aplicado: <strong>${percentual}</strong>;<br>`
            resultado.innerHTML += `Valor do aumento: <strong>R$${valorAumento}</strong>; <br>`
            resultado.innerHTML += `O valor após o aumento é de: <strong>R$${total}</strong>;`
            
        }

        /* SALÁRIOS ENTRE 700 E 1500 */
        else if(salario > 700 && salario <= 1500){
            let percentual = '10%'
            let valorAumento = (salario * 10)/100
            let total = salario + valorAumento
            resultado.innerHTML = `Salário antes do reajuste: <strong>R$${salario}</strong> ;<br>`
            resultado.innerHTML += `Percentual de aumento aplicado: <strong>${percentual}</strong>;<br>`
            resultado.innerHTML += `Valor do aumento: <strong>R$${valorAumento}</strong>; <br>`
            resultado.innerHTML += `O valor após o aumento é de: <strong>R$${total}</strong>;`
        }
        else if(salario > 1500){
            let percentual = '5%'
            let valorAumento = (salario * 5)/10
            let total = salario + valorAumento
            resultado.innerHTML = `Salário antes do reajuste: <strong>R$${salario}</strong> ;<br>`
            resultado.innerHTML += `Percentual de aumento aplicado: <strong>${percentual}</strong>;<br>`
            resultado.innerHTML += `Valor do aumento: <strong>R$${valorAumento}</strong>; <br>`
            resultado.innerHTML += `O valor após o aumento é de: <strong>R$${total}</strong>;`
        }
    }else{
        alert("[ERRO] Observe os seus dados e tente novamente")
    }
}

function limpar(){
    var resultado = document.getElementById('res')
    resultado.innerHTML = ""
    limparBtn.style.display = 'none'
}