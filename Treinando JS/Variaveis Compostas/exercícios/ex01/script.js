function notas(){
    var numAlunos = prompt('Informe o número de alunos: ')
    for(var i = 0; i < numAlunos; i++){
        var Notas = prompt(`Digite a nota do aluno ${i}`)
        var notas = []
    
        notas.push(Notas)
    }
    for(var i in notas){
        i
    }
    

    
}