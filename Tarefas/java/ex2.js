function cedulas(){
    let dindin = document.getElementById("dindin")
    let divSaida = document.getElementById("saida")
    let valor = Number(dindin.value)

    let vinte = parseInt(valor / 20)
    let resto = valor % 20
    let dez = parseInt(resto / 10)
    let resto2 = resto % 10
    let um = parseInt(resto2)

    divSaida.innerHTML = (`o valor de cédulas de 20 é: ${vinte} , o valor de cédulas de 10 é: ${dez} o valor de moedas de 1 real é: ${um} `)

}