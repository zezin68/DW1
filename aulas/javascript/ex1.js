function calculaMontante(){
    // pega os elementos do html
    let inputCapital = document.getElementById("capital")
    let inputTaxa = document.getElementById("taxa")
    let inputPeríodo = document.getElementById("período")
    let divSaida = document.getElementById("saida")

    // entrada
    let capital = Number(inputCapital.value)
    let taxa = Number(inputTaxa.value)
    let período = Number(inputPeríodo.value)


    // processamento
    let montante = capital * (((taxa/100)+1)**período)

    // saida
    divSaida.innerText = montante


}