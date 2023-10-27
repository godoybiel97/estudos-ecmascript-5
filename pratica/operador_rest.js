//Transformando valores indefinidos num array
function soma(...param) { //Quando o parâmetro de uma função for rest, isso significa que o valor inserido na função retornará um array
    let resultado = 0

    console.log(param)

    param.forEach(valor => resultado += valor)

    return resultado
}
console.log(soma(1, 2, 3))

//Transformando valores indefinidos num array
function multiplicar(mult, ...valores) {
    console.log(mult)
    console.log(valores)

    let resultado = 0

    valores.forEach(valor => resultado += mult * valor)

    return resultado
}
console.log(multiplicar(2, 1, 2, 3))