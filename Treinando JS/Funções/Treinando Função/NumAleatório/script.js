var button = document.getElementById('action')
button.addEventListener('click', aleatorio)
function aleatorio(){
    var res = document.getElementById('res')
    res.innerHTML = Math.random()
}