'use strict'
this.name = "Roberta"


function sayMyName (){
    console.log(this.name);
}

sayMyName()
//No caso acima, ele retornarĂ¡ "Roberta" no console, mas se ativarmos o strict Mode('use strict'), retornarĂ¡ undefined