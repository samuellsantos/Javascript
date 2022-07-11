//Não pega a THIS global, somente se estiver no modo estrito(Browser)


this.name = "Ismael"

function sayMyName (){
    console.log(this.name);
}

sayMyName()

//Neste caso vai dar Undefined pelo fato de estarmos no strict mode (Padrão do NODE)