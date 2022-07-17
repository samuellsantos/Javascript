const carros = {
	nome: "Porche",
	cor: "Branco",
	ano: "2018",
	nomeano: function(){
	return `${this.nome}${this.ano}`
}
}

console.log(carros.nomeano())