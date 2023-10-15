//Pilar da OO: polimorfismo
//Exemplos utilizando o super()
class Animal {
    constructor(cor, tamanho, peso) { //variáveis de escopo
        this.cor = cor //this referencia a classe
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir() {
        console.log("Dormir")
    }
}

class Passaro extends Animal { //sempre que houver extends haverá super()
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso) //super referencia o constructor da classe pai
        this.bico = bico
    }

    voar() {
        console.log("Voar")
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super("Médio", cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log("Falar")
    }
}

//A herança também pode funcionar como cascata
//Se uma classe já extendida for utilizada, automaticamente ela herda os dados
let papagaio = new Papagaio(true, "Verde", 25, 250)
console.log(papagaio)

class Avestruz extends Passaro {
    constructor() {
      super("Grande", "Cinza", 250, 15000)
    }

    enterrarCabeca() {
      console.log("Enterrar cabeça")
    }

    voar() { //o polimorfismo sobrescreve o método, pois avestruz não voa
      console.log("Não voa")
    }
}

let avestruz = new Avestruz()
console.log(avestruz)
console.log(avestruz.enterrarCabeca())
console.log(avestruz.voar())




