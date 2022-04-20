function conversao(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var r = document.getElementById('res')
    var Celsius = document.getElementById('celsius')
    var Farenheit = document.getElementById('farenheit')


    



    if(Celsius.checked == true)
/*         var resultado = (n1+32) / 1.8
        r.innerText = `${resultado} c` */
        r.innerHTML += celsius(n1)
    
    if(Farenheit.checked == true)
/*        var resultado = n1 * 1.8 + 32
        r.innerText = `${resultado} f` */ 
        r.innerHTML = farenheit(n1)

    
    

    /* FUNCTIONS */
    function celsius(x){
        return (1.8* x + 32)
        
    }

    function farenheit(x){
        return ((x-32) * 5/9)
    }
}