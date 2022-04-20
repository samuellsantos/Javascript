var calculadora = document.getElementById('calcular')
calculadora.addEventListener('click', calcular)
function calcular(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var resultado = document.getElementById('res')
    var texto = ''

    
    if(document.getElementById('soma').checked)
        texto = soma(n1, n2)
    
    if(document.getElementById('menos').checked)
        texto = menos(n1, n2)
    
    if(document.getElementById('vezes').checked)
        texto = vezes(n1, n2)
    
    if(document.getElementById('dividir').checked)
        texto = dividir(n1, n2)
    
    resultado.innerHTML = texto

}
function soma(x, y){
    return (x + y)
}
function menos(x, y){
    return (x - y)
}
function vezes(x, y){
    return (x * y)
}
function dividir(x, y){
    return (x / y)
}



