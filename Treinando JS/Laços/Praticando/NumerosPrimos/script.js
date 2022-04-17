function primo(){
    var num = document.getElementById('numberP')
    var n = Number(num.value)


    if(n == 2){
        alert('Primo!')
    }else if(n%2 == 0){
        alert(' Não Primo!')
    }
    else{
        alert('Primo!')
    }
}