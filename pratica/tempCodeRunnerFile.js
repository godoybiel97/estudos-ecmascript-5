let [a, b, c, d, e] = frutas //Dessa forma, cada variável se apropiará do valor de cada índice
// console.log(a, b, c, d, e)

// //Como desestruturar um array: armazenando o valor do índice numa variável nova
// let salgados = ["Bolinho de queijo", "Coxinha", "Esfiha", "Kibe"]
// let [f, , g, h] = salgados //Ao usar o espaço, o índice referente será ignorado
// console.log(f, g, h)

// //Como desestruturar um array dimensional: armazenando o valor do índice numa variável nova
// let doces = [["Beijinho", "Bem-Casado", "Brigadeiro"], ["Canudo", "Torta"]]
// let [, [, i]] = doces //A ideia sempre será a mesma. Nesete caso, o 1º array foi ignorado e valor do 2º array também
// console.log(i)

// //Como desestruturar um array: função
// function desestruturar([a, b, c, d, e]) {
//     console.log(a, b, c, d, e)
// }
// desestruturar(frutas)