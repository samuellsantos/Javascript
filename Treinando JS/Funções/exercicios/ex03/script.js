function maiorMenor(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var n3 = parseFloat(document.getElementById('n3').value)
    var resultado = document.getElementById('res')

    resultado.innerHTML = `O maior número digitado dentre os três foi o: ${maior(n1,n2,n3)} <br>`
    resultado.innerHTML += `O menor número digitado dentre os três foi o: ${menor(n1,n2,n3)}`
    

    function maior(x, y,z){
        if(x > y && x > z){
            return x
        }else if(y > x && y > z){
            return y
        }else{
            return z
        }
    }

    function menor(x,y,z){
        if(x < y && x < z){
            return x
        }else if(y < x && y < z){
            return y
        }else{
            return z
        }
    }
    
}