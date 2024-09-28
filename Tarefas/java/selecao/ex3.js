function ehTriangulo(lado1, lado2, lado3){
    if (
        (lado1 < lado2 + lado3 && lado1 > lado2 - lado3) &&
        (lado2 < lado1 + lado3 && lado2 > lado1 - lado3) &&
        (lado3 < lado1 + lado2 && lado3 > lado1 - lado2)
    ) {
        return true;
    }
    return false
}

let l1 = 10
let l2 = 10
let l3 = 20

if (ehTriangulo(l1,l2,l3)){
    if(l1 == l2 && l3 == l1){
        console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo equilatero`)}
    else if(l1 == l2 || l2 == l3 || l1 == l3 ){
        console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo isoceles`)
    }
    else{
        console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo escaleno`)
    }
}else {
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`)
}