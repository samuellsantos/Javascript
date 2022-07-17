const person = {
    firstName: "Samuel",
    lastName: "Santos",
    language: "pt-br",
    set lang(lang) {
        this.language = lang
    }
}

console.log(person.lang)