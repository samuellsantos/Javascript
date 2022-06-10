function displayNum(n1){
    var campo = document.getElementById('campoNum').innerHTML += n1
}function limpar(){
    document.getElementById('campoNum').innerHTML = ''
}function back(){
    var resultado = document.getElementById('campoNum').innerHTML;
    document.getElementById('campoNum').innerHTML = resultado.substring(0, resultado.length -1)
}function calcular(){
    var resultado = document.getElementById('campoNum').innerHTML;
    if(resultado){
        document.getElementById('campoNum').innerHTML = eval(resultado);
    }
}