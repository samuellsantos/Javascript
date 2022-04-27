function script(){
    var salario = parseInt(document.getElementById('n'))
    var resultado = document.getElementById('res')


    if(salario.value < 280){
        var percentual = '20%'
        var valorAumento = (salario.value *20)/100
        var total = salario.value + valorAumento
        resultado.innerHTML = `Salário antes do reajuste: ${salario.value}<br>`
        resultado.innerHTML += `Percentual de aumento aplicado: ${percentual}<br>`
        resultado.innerHTML += `Valor do aumento: ${valorAumento} <br>`
        resultado.innerHTML += `O valor após o aumento é de: ${total}`
    }
}