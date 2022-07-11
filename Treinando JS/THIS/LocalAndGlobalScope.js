/* Global Scope */

this.name = "Samuel"


function sayMyName(){
    //Este caso dá undefined pois estamos em um escopo Local
    //O escopo local não pega a variavel do escopo Global
    
    console.log(this.name);//Undefined
}
sayMyName()