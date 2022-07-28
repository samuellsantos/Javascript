class Car {
    constructor(name, year){
        this.name = name
        this.year = year
    }
    age(){
        let date = new Date()
        return date.getFullYear() - this.year
    }
}

let myCar = new Car('Ford', 2014)
console.log(`My car is ${myCar.age()} years old`)

class Book {
    constructor(estilo, cor){
        this.estilo = estilo
        this.cor = cor
    }
    bookStyle(){
        return this.estilo + ' ' + this.cor
    }
}

let myBook = new Book('Capa dura', 'marrom')
console.log(`O livro é ${myBook.bookStyle()}`)

