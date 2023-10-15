//Objetos: notação de classe
class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao() {
        console.log(`${this.descricao} custa R$ ${this.preco}`)
    }
}

let produto = new Produto("Notebook", 4000)
console.log(produto)
produto.verDescricao()

//Objetos: literais ou estáticos
let produtoLiteral = {
    descricao: "Geladeira",
    preco: 2000,
    verDescricao: function() {
        console.log(`${this.descricao} custa R$ ${this.preco}`)
    }
}

console.log(produtoLiteral)
produtoLiteral.verDescricao()

//Exemplos de como modificar ou adicionar novos dados ao objeto
let pessoa = {
    nome: "Gabriel",
    sobreNome: "Godoy",
    idade: 26,
    apresentar: function() {
        console.log(`Olá ! Meu nome é ${this.nome} ${this.sobreNome} e tenho ${this.idade} anos.`)
    }
}

console.log(pessoa)

pessoa.idade = 25
console.log(pessoa)

pessoa.profissao = "Programador"
console.log(pessoa)
pessoa.apresentar()

//Exemplo de uso do objeto único
let assinatura = {
    idCliente: 1,
    servico: "Internet",
    status() {
        console.log("Ativo")
    }
}

console.log(assinatura)

let cliente = assinatura
cliente.servico = "Internet + TV"
cliente.status()
console.log(cliente)