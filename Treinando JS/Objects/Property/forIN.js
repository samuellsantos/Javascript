const marcas = {}

marcas.model1 = "Nike"
marcas.model2 = "Puma"
marcas.model3 = "Adidas"


for (let percorrerObjeto in marcas) {
    console.log(marcas[percorrerObjeto])
}