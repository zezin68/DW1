const num = [10,15,20,25,30,35]

// numeros multiplicados por 10
// numeros pares
// numeros impares

function mult10(elemento){
    return elemento * 10
}
// const copia = num.map(mult10)
const copia = num.map(function (n){return n*10})
console.log(copia)
const copiaString = num.map(num => `numero ${num}`)