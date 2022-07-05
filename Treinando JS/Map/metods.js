//Learning use "set", "has", "delete", "get" and "size"




const fruits = new Map() 

//Set values Map
fruits.set("maças",500)
fruits.set("bananas", 300)
fruits.set("laranjas", 200)






//HAS
console.log(`Neste Map tem bananas, true or false? ${fruits.has("bananas")}`)

fruits.delete("laranjas")
console.log(`Neste Map tem laranjas, true or false? ${fruits.has("laranjas")}`)


console.log(`Neste Map tem maças, true or false? ${fruits.has("maças")}`)


console.log(`Neste Map tem Peras, true or false? ${fruits.has("peras")}`)


//GET
console.log(`Há quantas bananas ? ${fruits.get("bananas")}`)

// SET NEW VALUE
fruits.set("bananas", 200)
console.log(`Eu decidi vender 100 destas, com quantas eu fiquei? ${fruits.get("bananas")}`)


// SIZE
console.log(`Quantos produtos eu tenho na minha loja?  ${fruits.size}`)
