//function.call(this, arg1, arg2)
//Retornar o this do contexto que eu enviar


this.name = "Geisa"

function sayMyName(age){
    this.age = age
    console.log(this.name);
}

const dev = {
    name: "Raimundo"
}
sayMyName.call(this, 22)
sayMyName.call(dev, 25)