//Exemplos de funcionamento de funções factorys
//Uso do objeto literal
let bicicleta = {
    marca: "Caloi",
    cor: "Preta",
    aro: 18,
    pedalar() {
        console.log("Pedalando")
    }
}

console.log(bicicleta)

//Exemplos de funcionamento de funções factorys
//O objeto é criado a partir do retorno da função (modo estático)
let bicicletaFactory = function() {
    //Alguma lógica
    return {
        marca: "Houston",
        cor: "Branca",
        aro: 20,
        pedalar() {
            console.log("Pedalando")
        }
    }
}

//Exemplos de funcionamento de funções factorys
//O objeto é criado a partir do retorno da função (modo dinâmico)
let bicicletaFactory2 = function(marca, cor, aro) {
    //Alguma lógica
    return {
        marca: marca,
        cor: cor,
        aro: aro,
        pedalar() {
            console.log("Pedalando")
        }
    }
}

let bicicleta2 = bicicletaFactory2("Velozter", "Vermelha", 26)
console.log(bicicleta2)