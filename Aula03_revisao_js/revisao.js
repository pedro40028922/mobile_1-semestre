console.log("teste")
// primeiro comentario

    /* segundo comentario
    para relembrar
    */

    // variaveis 
    const nome = "Pedro"
    let idade = 20
    const maiorDeIdade = true

    console.log(nome)
    console.log(idade)
    console.log("E maior de idade? ", maiorDeIdade)
    
    idade = 19
    console.log(idade)
    
    // operadores
    const soma = 2 + 2
    const subtracao = 2-2
    const multiplicacao = 2*2
    const divisao = 2/2

    console.log(soma)
    console.log(subtracao)
    console.log(multiplicacao)
    console.log(divisao)

    const resto = 3 % 3
  let numero  = 4
   let incremento = numero ++
    let decremento = numero --
    
    console.log("incremento ->",incremento)
    console.log("decremento ->",decremento)
    console.log("resto ->", resto)

    let a = 3
    a %= 3
    console.log(a)

    // opredores de comparação
const igual = 10 =="10"
    console.log(igual)
    const estritamenteigual = 10 ==="10"
        console.log(estritamenteigual)
const maior = 3 > 1
const menor =  4 < 10
const maiorouigual = 10>= 10
const menorouigual = 10<= 10


// array

let frutas = ["maça", "banana", "uva"]


console.log (frutas[0])
console.log (frutas[1])
console.log (frutas[2])
console.log (frutas.length)

frutas.push("Laranja")

frutas.forEach((frutas) =>{
    console.log(frutas)
})

frutas.pop()
console.log(frutas)

// Objetos
let pessoa = {
    nome: "Gustavo",
    idade: "19",
    altura: 1.70,
    peso: 80
}
console.log(pessoa)
pessoa.email = "Pedro@g.com"

delete pessoa .email;
console.log(pessoa)
// Destrua o objeto pessoa

let {altura, peso} = pessoa
console.log(altura)
console.log(peso)

// propagação de objetos
let endereco = {
    cidade: "ceilandia",
    UF: "DF"
}

let pessoaCompleto = {...pessoa, ...endereco }
console.log(pessoaCompleto)

// funções
function somar(NumA, NumB) {
    return NumA, NumB
}
console.log(somar(2+2))

function saudacao(nome) {
    console.log("ola" + nome)
}
saudacao("Gustavo")

// função anonima

let subtrair = function (NumA, NumB) {
    return NumA + NumB
}
console.log(subtrair(4,2))
