// par nome/valor
const saudacao = "oi"// contexto lexico 1

function exec() {
    const saudacao = "falaa"
    return saudacao
}


const cliente = {
    nome: "pedro",
    idade: 10,
    peso:30,
    endereco: {
        logradouro: "rua muito legal",
        numero: 123
    }
    
}
console.log(saudacao)
console.log(exec())
console.log(cliente)