function probabilidade(){
    var dado = 6
    var lançamento = 1000000
    alert(dado)
    alert(`${calcular(dado,lançamento)}`)

    function calcular(x,y){
        return (x/y)
    }
}