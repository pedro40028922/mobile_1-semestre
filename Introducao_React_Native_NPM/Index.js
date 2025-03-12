import {calculaeMc} from "./CalculadoraMC.js"
console.log("Calculo do IMC")

console.log (">>> Tabela do IMC")

const peso = 80
const altura = 1.70
const resultado = calculaeMc(altura, peso)

console.log("Resultado do IMC")
console.table("tabela imc")

console.log("resultado do imc")
console.log(`imc ${resultado.toFixed(2)}`)

// importando lib moment e usando

import moment from "moment"
const hoje = moment().locale("pt-br")
