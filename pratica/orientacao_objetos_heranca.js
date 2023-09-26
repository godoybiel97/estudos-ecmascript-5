//Pilar da OO: herança
//Subdividir classes gerneralistas em: super classe e sub classe
class Animal {
    constructor() {
        this.nome = ""
        this.cor = ""
    }

    comer() {
        console.log("Comer")
    }

    dormir() {
        console.log("Dormir")
    }
}

class Cachorro extends Animal {
    constructor() {
        super()
        this.forca = "Disciplina"
    }

    latir() {
        console.log("Au Au")
    }
}

let cachorro = new Cachorro()
console.log(cachorro)
console.log(cachorro.comer())
console.log(cachorro.latir())
console.log(cachorro.forca)

class Gato extends Animal {
    constructor() {
        super()
        this.humor = "Preguiçoso"
    }

    miar() {
        console.log("Miau")
    }
}

let gato = new Gato()
console.log(gato)
console.log(gato.dormir())
console.log(gato.miar())
console.log(gato.humor)

//A herança também pode funcionar como cascata
//Se uma classe já extendida for utilizada, automaticamente ela herda os dados
class Lobo extends Cachorro {
    constructor() {
        super()
        this.tamanho = "Muito perigoso"
        this.comida = "Carne"
    }
}

let lobo = new Lobo()
console.log(lobo)
console.log(lobo.nome = "Auuu")
console.log(lobo.tamanho)
console.log(lobo.comer())
console.log(lobo.latir())