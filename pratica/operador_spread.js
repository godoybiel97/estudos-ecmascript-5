//Maneiras de utilizar o operador rest/spread: strings
let frase = "Como utilizar o comando rest/spread"
console.log(frase) //A frase completa
console.log(...frase) //Cada palavra da frase

//Maneiras de utilizar o operador rest/spread: arrays
let linguagens = ["JavaScript", "TypeScript", "NodeJS"]
console.log(linguagens)

let frameworks = ["Angular", "React"]
console.log(frameworks)

let lista = [...linguagens, ...frameworks, "Mobile", "Web"] //Inserindo o conteúdo de linguagens[] e frameworks[] em lista[]
console.log(lista)

//Maneiras de utilizar o operador rest/spread: objetos
let usuario = {
    nome: "Gabriel",
    sobreNome: "Godoy",
    cargo: "Front-End"
}
console.log(usuario)

let permissao = { //Inserindo o conteúdo de usuario{} em permissao{}
    func: true,
    admin: false,
    ...usuario
}
console.log(permissao)


