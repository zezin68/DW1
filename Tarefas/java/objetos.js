// 1
const carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 }
console.log(carro)
//2 
console.log(carro.marca)
carro.ano = 2021
console.log(carro)
// 3
carro["cor"] = "preto"
delete carro.modelo
console.log(carro)
// 4
const pessoa = {
        nome : "João",
        idade : 20,
        cumprimentar : function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}
pessoa.cumprimentar();
// 5
const produto = {
    nome : "arroz", preco : 2, categoria : "carboidrato"
    }
function loop (produto){
    for (coisa in produto){
        console.log(produto[coisa])
    }
}
loop(produto);
// 6
