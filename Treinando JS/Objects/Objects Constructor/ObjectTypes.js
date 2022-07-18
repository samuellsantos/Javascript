function Person (name, language, age, country, eye){
    this.nome = name;
    this.idioma = language;
    this.idade = age;
    this.pais = country;
    this.eyeColor = eye
}

const samuel = new Person ("Samuel", "PT-BR", 18, "Brazil", "Brown")
const ismael = new Person ("Ismael", "EN", "14", "Unite States")

console.log(`I am ${samuel.nome} i have ${samuel.idade} years, and my Brother is ${ismael.nome} he has ${ismael.idade} years.`)
console.log(`A cor do olho do Samuel é ${samuel.eyeColor}`)