console.log(Math.random())

//Inteiros de 0 a 9

console.log(Math.floor(Math.random()*10))

//Inteiros de 0 a 1000

console.log(Math.floor(Math.random()*1001))
//O número a ser multiplicado não é considerado. Por exemplo, no caso acima a aletoriedade vai somente até o 1000. -- O 1001 não é considerado.



function getRndItereger(min,max){
    return Math.floor(Math.random() * (max - min) )+ min
}
//Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
console.log(`O número aleatório definido na função é: ${getRndItereger(0, 5)}`)