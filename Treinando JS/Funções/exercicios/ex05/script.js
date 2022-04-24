function primo(){
    var n = parseInt(document.getElementById('n').value)  
    var res = document.getElementById('res')

    

    res.innerHTML = `O número digitado é: ${Numprimo(n)}!`
    res.innerHTML = `${sequencia(n)}`
    var seq = sequencia(n)

    function Numprimo(x){
        if(x <= 0){
            alert('Digite um valor inteiro positivo')
        }
        
        
        else if(x%2 == 0 || x == 2){
            return 'Não Primo'
            function sequencia(x){
                for(var i = 1; x >= i; x--){
                    if(x%2 == 0 || x == 2){
                        res.innerHTML += x
                    }
                }
            }
        }
        
        
        else{
            return 'Primo'
        }
    }
    

}