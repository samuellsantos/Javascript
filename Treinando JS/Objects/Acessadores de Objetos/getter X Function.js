//Getter
const person = {
    firstName : "Samuel",
    lastName: "Santos",
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

}
console.log(person.fullName)


//Function 
const person2 = {
    firstName : "Ismael",
    secondName: "Santos",
    fullName: function (){
        return this.firstName + " " +  this.secondName
    }
}
console.log(person2.fullName())
