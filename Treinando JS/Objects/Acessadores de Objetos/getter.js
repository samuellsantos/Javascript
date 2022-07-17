const person = {
    firstName: "Samuel",
    lastName: "Santos",
    language: "pt-br",
    get lang() {
        return this.language
    }
}

console.log(person.lang)