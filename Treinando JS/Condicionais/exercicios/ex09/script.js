function impostoRenda(){
    var valorHora = document.getElementById('valHora').value
    var quantidadeHoras = document.getElementById('quantHoras').value
    var salarioBruto = (valorHora * quantidadeHoras)
    var res = document.getElementById('res')

    if(salarioBruto <= 900){
        alert(`Com o salário de R$${salarioBruto}, você está insento do imposto de renda`)
        res.innerHTML = `Salário Bruto : R$${salarioBruto}`
    }else if(salarioBruto <= 1500){
        var ir = (salarioBruto * 5)/100
        var inss = (salarioBruto * 10)/100
        var fgts = (salarioBruto * 11)/100
        var descontoTotal = ir + inss
        var salarioLiquido = (salarioBruto - descontoTotal)
        alert(`Com o salário de R$${salarioBruto},00, seu desconto é de 5%`)
        res.innerHTML = `<strong>>Salário Bruto<strong>: R$${salarioBruto},00<br>`
        res.innerHTML += `<strong>>IR</strong>(5%): R$${ir},00<br>`
        res.innerHTML += `<strong>>INSS</strong>(10%): R$${inss},00 <br>`
        res.innerHTML += `<strong>>FGTS</strong>(11%): R$${fgts},00<br>`
        res.innerHTML += `<strong>>Total de descontos</strong>: R$${descontoTotal},00 <br>`
        res.innerHTML += `<strong>>Salário liquido</strong>: R$${salarioLiquido},00`
    }else if(salarioBruto <= 2500){
        var ir = (salarioBruto * 10)/100
        var inss = (salarioBruto * 10)/100
        var fgts = (salarioBruto * 11)/100
        var descontoTotal = ir + inss
        var salarioLiquido = (salarioBruto - descontoTotal)
        alert(`Com o salário de R$${salarioBruto},00, seu desconto é de 10%`)
        res.innerHTML = `<strong>>Salário Bruto<strong>: R$${salarioBruto},00<br>`
        res.innerHTML += `<strong>>IR</strong>(10%): R$${ir},00<br>`
        res.innerHTML += `<strong>>INSS</strong>(10%): R$${inss},00 <br>`
        res.innerHTML += `<strong>>FGTS</strong>(11%): R$${fgts},00<br>`
        res.innerHTML += `<strong>>Total de descontos</strong>: R$${descontoTotal},00 <br>`
        res.innerHTML += `<strong>>Salário liquido</strong>: R$${salarioLiquido},00`
    }else if(salarioBruto > 2500){
        var ir = (salarioBruto * 20)/100
        var inss = (salarioBruto * 10)/100
        var fgts = (salarioBruto * 11)/100
        var descontoTotal = ir + inss
        var salarioLiquido = (salarioBruto - descontoTotal)
        alert(`Com o salário de R$${salarioBruto},00, seu desconto é de 20%`)
        res.innerHTML = `<strong>>Salário Bruto<strong>: R$${salarioBruto},00<br>`
        res.innerHTML += `<strong>>IR</strong>(20%): R$${ir},00<br>`
        res.innerHTML += `<strong>>INSS</strong>(10%): R$${inss},00 <br>`
        res.innerHTML += `<strong>>FGTS</strong>(11%): R$${fgts},00<br>`
        res.innerHTML += `<strong>>Total de descontos</strong>: R$${descontoTotal},00 <br>`
        res.innerHTML += `<strong>>Salário liquido</strong>: R$${salarioLiquido},00`
    }else{
        alert("ERROR")
    }
}