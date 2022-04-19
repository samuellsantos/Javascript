/* Entre 0 e 1 */

/* var button = document.getElementById('action')
button.addEventListener('click', aleatorio)
function aleatorio(){
    var res = document.getElementById('res')
    res.innerHTML = Math.random()
} */




/* Entre 0 e 10 */
var button = document.getElementById('action')
button.addEventListener('click', aleatorio)
function aleatorio(){
    var res = document.getElementById('res')
    res.innerHTML = Math.floor(10*Math.random())
}