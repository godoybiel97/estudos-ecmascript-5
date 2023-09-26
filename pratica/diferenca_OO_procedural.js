//PROGRAMAÇÃO PROCEDURAL: ORDEM CRONOLÓGICA (CASCATA)

/*Abstração de uma cadeira
let qtde_pernas = 4
let giratoria = true
let cor = "Amarela"

function girarCadeira() {
    if(giratoria === true) {
        console.log("A cadeira é giratória")
    } else {
        console.log("A cadeira não é giratória")
    }
}

girarCadeira()
*/

/*Implementando funcionalidades
let cadeiras = []

cadeiras[0] = []
cadeiras[0]["qtde_pernas"] = 4
cadeiras[0]["giratoria"] = true
cadeiras[0]["cor"] = "Amarela"

cadeiras[1] = []
cadeiras[1]["qtde_pernas"] = 1
cadeiras[1]["giratoria"] = false
cadeiras[1]["cor"] = "Azul"

console.log(cadeiras)

function girarCadeira(i) {
    if(cadeiras[i]["giratoria"] === true) {
        console.log("A cadeira é giratória")
    } else {
        console.log("A cadeira não é giratória")
    }
}
girarCadeira(1)

function adicionarCadeira(qtde_pernas, giratoria, cor) {
    let cadeira = []

    cadeira["qtde_pernas"] = qtde_pernas
    cadeira["giratoria"] = giratoria
    cadeira["cor"] = cor
    cadeiras.push(cadeira)

    console.log(cadeira)
}
adicionarCadeira(4, true, "Branca")
console.log(cadeiras)
*/


//PROGRAMAÇÃO OO

//Abstração de uma cadeira
class Cadeira {
    constructor(qtde_pernas, giratoria, cor) {
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        if(this.giratoria === true) {
            console.log("A cadeira é giratória")
        } else {
            console.log("A cadeira não é giratória")
        }
    }
}

let cadeiras = []
cadeiras.push(new Cadeira(4, false, "Amarela"))
cadeiras.push(new Cadeira(1, true, "Azul"))
console.log(cadeiras)
