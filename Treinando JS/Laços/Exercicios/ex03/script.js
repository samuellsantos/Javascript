function dados(){
    var nome = prompt("Digite o seu nome: ").length
    while(nome < 3 || nome == 0){
        alert('O seu nome deve conter mais de 3 caracteres!')
        var nome = prompt("Digite o seu nome: ").length 
    }



    var idade = prompt("Digite a sua idade: ")
    while(idade > 150 || idade < 0 || idade == 0){
        alert('Digite uma idade válida')
        var idade = prompt("Digite a sua idade: ")
    }


    var salario = prompt("Digite o seu salário")
    while(salario <= 0){
        alert('[ERRO] Observe e digite novamente')
        var salario = prompt("Digite o seu salário")
    }

    var sexo = prompt("Digite o seu sexo: (F) ou (M)").toLowerCase()
    while(sexo != "f" && sexo != "m"){
        alert('Considere, (F) para feminino e (M) para masculino')
        var sexo = prompt("Digite o seu sexo: (F) ou (M)").toLowerCase()
    }

    
    var estadoCivil = prompt("Digite o seu estado civil: (S), (C), (V) ou (D)").toLowerCase()
    while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd'){
        alert('[ERRO] Observe os dados e tente novamente')
        var estadoCivil = prompt("Digite o seu estado civil: (S), (C), (V) ou (D)").toLowerCase()
    }
    alert('Seus dados foram armazenados')

}