const fruits = new Map()

fruits.set("apple", 500)
fruits.set("orange", 200)
fruits.set("banana", 300)

let text;
fruits.forEach (function(value, key){
    text += key + "=" + value + br
})
document.getElementById("text").innerHTML = text;