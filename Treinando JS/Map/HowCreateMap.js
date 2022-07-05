// Create Map
const fruits = new Map([
    ["maça", 500],
    ["banana", 300],
    ["laranja", 200]
])


fruits.delete("banana")
console.log(fruits.has("banana"))

