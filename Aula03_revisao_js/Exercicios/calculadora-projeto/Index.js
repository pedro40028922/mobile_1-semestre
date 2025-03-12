import { soma,divisao,multiplicacao,subtracao} from "./calculadora.js"
import moment from "moment/moment.js";

console.log("Soma: ", soma(10,5))
    console.log("Subtração: ", subtracao(10,5))
        console.log("multiplicacao: ", multiplicacao(10,5));
            console.log("Divisão: ", divisao(10,5));
function calcularIdade(anoNacimento) {
 
  return    moment().year() - anoNacimento 
}
const anoNacimento = 1990;
const idade = calcularIdade(anoNacimento)

console.log(`idade: ${idade} anos`);
