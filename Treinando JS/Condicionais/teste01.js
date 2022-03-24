var dinheiro = 15

if(dinheiro > 21){
    console.log(`Com R$${dinheiro.toFixed(2).replace('.',',')} você pode levar qualquer um desses!!`)
}else{
    console.log(`Você só tem R$ ${dinheiro.toFixed(2).replace('.',',')} desculpe é insuficiente`)
}
