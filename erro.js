function tratarErroLancar(erro){
    throw new Error("erro")
}


function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase()) + "!!!"
}

catch(e){
    tratarErroLancar(e)
}
finally {
    console.log("final")
}
}

const obj = {nome: "Roberta"}
imprimirNomeGritado(obj)