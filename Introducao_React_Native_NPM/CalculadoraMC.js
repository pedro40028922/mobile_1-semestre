// Sistema de Modules (ES6) -> Exportando
export const TabelaIMC = [
{Limite: 18.5, clasificacao:"Magreza" },
{Limite: 18.5, clasificacao:"Normal"},
{Limite: 18.5, clasificacao:"Sobrepeso" },
{Limite: 18.5, clasificacao:"Obsidade Grau I"},
{Limite: 18.5, clasificacao:"Obsidade Grau II"},
{Limite: 18.5, clasificacao:"Obsidade Grau III"},
]



export const calculaeMc = (peso, altura) => {
    return peso / (altura * altura)
}