//Como desestruturar um objeto
let produto = {
    nome: "Notebook",
    preco: 2500,
    mouse: false,
    carregador: true,
    detalhes: {
        fabricante: "Dell",
        modelo: undefined
    }
}

//Para desestruturar, basta selecionar os atributos da sua preferência
let {nome, preco} = produto
console.log(nome, preco)

//É possível alterar o nome original dos atributos e adicionar um novo atributo
let {mouse: m, carregador: c, teclado = false} = produto
console.log(m, c, teclado)

//É possível acessar atributos cujo valor é um objeto
let {detalhes: {fabricante, modelo}} = produto
console.log(fabricante, modelo)

//A desestruturação pode ser feita por uma função
function desestruturar({nome, preco, mouse}) {
    console.log(nome, preco, mouse)
}
desestruturar(produto)

//Utilizando o operador rest na desestruturação
let {carregador, ...outros} = produto
console.log(carregador)
console.log(outros)