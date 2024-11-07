// function sumArray(arr){
//     let soma = 0
//     for(elemento of arr){
//         soma += elemento
//     }
//     return soma
// }

// console.log(sumArray([1,2,3,4]))
// console.log(sumArray([10,-10,10]))

function getEvenNumbers(vetor){

    let novovetor = []
    for( elemento of vetor){
        if(elemento%2 == 0){
            // novovetor[novovetor.length] = elemento
            novovetor.push(elemento)

        }
    }
    return novovetor

}
console.log(getEvenNumbers([1,2,3,4,5,6]))
console.log(getEvenNumbers([10,15,20,25]))

function soma2(elemen){
    return elemen + 2
}
function duplica(elemento){
    return elemento * 2
}
    let vetor = [10,20,30,35]
    console.log(vetor)
    let v3 = vetor.map(soma2)
    let v4 = vetor.map(duplica)
    console.log(v3)
    console.log(v4)
    // vetor.map() vai passar por todos os elementos
    // dentro do map, tu coloca o que tu quer fazer com os elementos com base em uma funçao q tu cria

function ehpar(ele){
    // if (ele % 2 == 0){
    //     return ele
    // }
    return ele % 2 == 0
    // vai retornar ele se for par
}
let v5 = vetor.filter(ehpar)
console.log(v5)

let v6 = vetor.filter(ele => ele % 2 == 0)
// uma funcao dentro do bagui, é meio confuso, mas se "ele" for par, vai retornar "ele"
// é uma funcao anonima, ou seja, so existe la dentro
console.log(v6)