//Getters

const person = {
    firstName: "Samuel",
    secondName: "Santos",
    language: "pt-br",
    get nome(){
        return `O nome tem ${this.firstName.length} letras`
    }
}
console.log(person.nome)

const person2 = {
    firstName: "Ismael",
    secondName: "Santos",
    language: "pt-br",
    set lang(lang) {
        this.language = lang.toUpperCase();
      }
}
person.lang = 'en'

console.log(person2.language)

