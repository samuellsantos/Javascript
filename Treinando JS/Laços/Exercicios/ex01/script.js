function nota(){
    var nota = prompt('Digite uma nota entre 0 e 10:')
    if(nota <=10 && nota > 0){
        alert(`A nota ${nota } foi armazenada`)
    }else{
        while(nota > 10 || nota < 0){
            var nota = prompt('Digite um valor válido:')
        }
        alert(`A nota ${nota } foi armazenada`)
    }
    

}