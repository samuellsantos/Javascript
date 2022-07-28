/* class Car {
    constructor(brand) {
        this.carname = brand
    }
    present(){
        return `I have a ${this.carname}`
    }
}


class Model extends Car {
    constructor(brand, mod){
        super(brand)
        this.model = mod
    }
    show(){
        return `${this.present()}, it is a ${this.model}`
    }
}

let myCar = new Model ("Ford", "Mustang")
console.log(myCar.show()) */


class Car {
    constructor(marca){
        this.marca = marca
    }
    present(){
        return `I have a ${this.marca}`
    }
}

class modelo extends Car {
    constructor(marca, model){
        super(marca)
        this.model = model
    }
    show(){
        return `My car is a ${this.marca} ${this.model}`
    }
}

let myCar = new modelo ("Volks", "Fox")
console.log(myCar.marca)
