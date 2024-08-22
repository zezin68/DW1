function calculaImc(){
    // pega os elementos do html
    let inputPeso = document.getElementById("peso")
    let inputAltura = document.getElementById("altura")
    let divSaida = document.getElementById("saida")

    // entrada
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    // processamento
    let imc = peso / (altura*altura)

    // saida
    divSaida.innerText = imc



    // let peso = 50
    // let altura = 1.5

    // let imc = peso / (altura * altura)
    // document.write("IMC ",imc)
}