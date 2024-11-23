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
const biblioteca = {
    Srdosaneis : {nome : "Senhor dos anéis", ano : 1984, autor : "Eduardo"},
    Fabricachocolate : {nome:"A incrível fáblica de chocolate", ano: 1999, autor : "WWillie Wonka"},
    rio : {nome:"rio", ano:2010, autor:"blue"}
}
console.log(Object.values(biblioteca.Srdosaneis))
console.log(Object.values(biblioteca.Fabricachocolate))
console.log(Object.values(biblioteca.rio))
// 7
const carrinho={
    itens:[
        {nome:"coca", preco: 5},
        {nome:"chocolate", preco: 10},
        {nome:"pitayas", preco: 15}
    ]
}
function somard(y){
    let x = 0
    for (let objeto = 0; objeto < y.itens.length; objeto ++){
        x += y.itens[objeto].preco;
    }
    console.log(x)
}
somard(carrinho)
// 8
aluno = {
    nome: "jorje", idade : 30, curso: "eng.quimica"
}
const { nome, curso} = aluno
console.log(nome)
console.log(curso)
// 9
estoque = [
    { id : 1 , nome : "garrafa", quantiedade :4},
    { id : 2 , nome : "suco", quantiedade :4},
    { id : 3 , nome : "coca", quantiedade :4}
]
function att(i,q){
    for(let andar = 0; andar < estoque.length; andar++){
        if(estoque[andar].id == i){
            estoque[andar].quantiedade = q;
        }
    }
}
console.log(estoque)
att(3,5)
console.log(estoque)
// 10
usuario = [
    {nome: "carlos" , idade:10 , email:"blalba" },
    {nome: "jorje" , idade: 25 , email: "asdasda" },
    {nome: "fausto" , idade: 57 , email: "xxxxxxx" }
]
const menos = usuario.map(item => [ item.nome, item.email ])
console.log(menos)
