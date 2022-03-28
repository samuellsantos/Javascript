function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = (`Agora são ${hora} horas`)
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'images/manhã.jpg'
        document.body.style.background = '#A69B03'
    }else if(hora >= 12 && hora <= 18){
        //Boa terde
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#F2AE72'
    }else{
        //Boa noite
        img.src = 'images/noite.jpg'
        document.body.style.background = '#856DA6'
    }
}