function valor(){
    let inputpedagio = document.getElementById("pedagio")
    let inputdistancia = document.getElementById("distancia")
    let inputmediacarro = document.getElementById("mediacarro")
    let inputprecocombust = document.getElementById("precocombust")
    let inputcapactanque = document.getElementById("capactanque")
    let inputlitrosatuais = document.getElementById("litrosatuais")
    let divsaida = document.getElementById("saida")
    
    pedagio = Number(inputpedagio.value)
    distancia = Number(inputdistancia.value)
    media = Number(inputmediacarro.value)
    preco = Number(inputprecocombust.value)
    capacidade = Number(inputcapactanque.value)
    litros = Number(inputlitrosatuais.value)

    resultado = pedagio + (parseInt(((distancia/media)-litros)/capacidade)*(preco * capacidade))

    divsaida.innerText = resultado
}