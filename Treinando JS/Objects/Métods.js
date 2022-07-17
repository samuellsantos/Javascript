const person = {
    firstname: "Samuel",
    lastname: "Santos",
    age: 18,
    fullname: function (){ //This a method
        return `O nome completo é: ${this.firstname} ${this.lastname}`
    }
}

console.log(person.fullname())