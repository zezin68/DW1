function medida(cm, uni) {
    if (uni === "m") {
        return cm / 100;
    } else if (uni === "mm") {
        return cm * 10; 
    } else if (uni === "km") {
        return cm / 100000;
    } else {
        return "Unidade inválida"
    }
}

let medidaEmCm = 1000;
console.log(medida(medidaEmCm, "m"))
console.log(medida(medidaEmCm, "mm"))
console.log(medida(medidaEmCm, "km"))
