function multar(){
    let velma = document.getElementById("velmax").value
    let velve = document.getElementById("velvei").value

    let velmax = Number(velma)
    let velvei = Number(velve)

    let multa = (velvei - velmax)
    let subtrair = (velvei - velmax)
    let porcentagem = (subtrair / velmax)
    let porcento = (porcentagem * 100)

    let saida = document.getElementById("saida")

    if (multa <= 0) {
        saida.innerHTML = (`Parabéns, voce não tomou multa!`)
        }
    else {
        if (porcentagem < 0.20 ) {
            saida.innerHTML = (`Voce exedeu ${porcento}% da velocidade máxima. Sua multa é de R$ 130,16`)
        }
        else if (0.20 <= porcentagem && porcentagem <= 0.50) {
            saida.innerHTML = (`Você exedeu ${porcento}% da velocidade máxima. Sua multa é de R$ 195,23`)
        } 
        else if (porcentagem > 0.50) {
            saida.innerHTML = (`Você exedeu ${porcento}% da velocidade máxima. Sua multa é de R$ 880,41`)
        }
    }
}
    