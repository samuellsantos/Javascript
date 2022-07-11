//Neste caso ele não pega o valor do this Global, mas sim do this do Objeto


this.name = "Samuel"

const teste = {
    name: "Santos",
    sayMyName: function(){
        console.log(this.name);
    }
}

teste.sayMyName()