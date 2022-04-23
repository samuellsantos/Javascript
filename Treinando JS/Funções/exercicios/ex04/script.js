function probabilidade(){
    var dado = 6
    var lançamento = 1000000

    alert(`${calcular(dado,lançamento)}`)

    function calcular(x,y){
        return (x/y)
    }
}