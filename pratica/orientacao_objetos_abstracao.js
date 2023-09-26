//Um modelo de objeto pode ser equiparado a uma classe
class ContaBancaria {
    constructor() {
        //Construção do objeto, ou seja, os atributos
        this.agencia = 1020
        this.numeroConta = 102030405060708090
        this.saldo = 100
        this.limite = 500
    }
    //Construção dos métodos
    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo() {
        return this.saldo
    }
}
//Instanciando um novo objeto sem perder a identidade
let contaBancaria = new ContaBancaria()

console.log(`Saldo inicial de R$${contaBancaria.consultarSaldo()}`)
console.log(`Depositando R$100`)
contaBancaria.depositar(100)
console.log(`Saldo final de R$${contaBancaria.consultarSaldo()}`)

console.log(`Saldo inicial de R$${contaBancaria.consultarSaldo()}`)
console.log(`Sacando R$50`)
contaBancaria.sacar(50)
console.log(`Saldo final de R$${contaBancaria.consultarSaldo()}`)
