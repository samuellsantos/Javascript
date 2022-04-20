function action(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var n3 = parseFloat(document.getElementById('n3').value)
    var resultado = document.getElementById('res')

    resultado.innerHTML += `A soma de todos os valores é ${soma(n1, n2, n3)} <br>`
    resultado.innerHTML += `A media entre os três valores é: ${media(n1, n2, n3, 3)}`
    function soma(x,y,z){
        return  x + y + z
    }
    function media(x, y, z, num){
        return (x+y+z)/num
    }
}