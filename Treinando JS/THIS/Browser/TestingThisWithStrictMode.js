'use strict'
this.name = "Roberta"


function sayMyName (){
    console.log(this.name);
}

sayMyName()
//No caso acima, ele retornará "Roberta" no console, mas se ativarmos o strict Mode('use strict'), retornará undefined