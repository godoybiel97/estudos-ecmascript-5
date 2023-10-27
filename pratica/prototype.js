//Objetc.prototype
let animal = { atrib1: "a"}
let vertebrado = { __proto__: animal, atrib2: "b"}
let ave = { __proto__: vertebrado, atrib3: "c"}

console.log(ave.atrib2, ave.atrib1)