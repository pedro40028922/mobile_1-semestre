// exercicio 1 
let nome = "PEDRO"
const Maior = nome.toLowerCase();
const menor = nome.toUpperCase();
 
console.log(Maior)
 console.log(menor)

 const ListaNome = ["Pedro","Rafael", "Lorena"]

 ListaNome.reverse();

 console.log(ListaNome)

 let poema = "biro do liro do xido nabo caibo"
    let novopoema = poema.replace(/o/g, 'k')
        console.log(novopoema)

        // Exercício 2
    let soma = 15 + 5
    let subtracao = 15-5
    let multiplicacao = 15*5
    let divisao = 15/5
    
    console.log(soma)
        console.log(subtracao)
            console.log(multiplicacao)
                console.log(divisao)

    const prompt = require('prompt-sync')
let NumA = 15
let numB = 5
                if (NumA > numB) {
                        console.log(`${NumA} é maior que ${numB}`)
                    } else {
                        console.log(`${NumA} é Menor que ${numB}`)
                    }
                    // exercicio 3
let idade = 70
 if (idade >= 65) {
    console.log('É Idoso')
 } else if(idade >= 18) {
    console.log("Maior de idade")
 } else{
    console.log("É menor de idade")
 }
                //Exercicio 4  
/*   for (let num = 0; num <=100; num++) {
    
console.log(num)
  
}
 */               // Exercicio 5
        function multiplicador(Kaioken) {
   return{
    Dobro: Kaioken*2,
    triplo: Kaioken*3,
    quadrado: Kaioken**2
}}  
console.log(multiplicador(5))

                // Exercicio 6
let numeros =[10,20,30,40,50]
let add = numeros.push(60)
let removerPri = numeros.shift()

console.log(numeros)