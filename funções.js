/**
 * Funções são blocos de construção fundamentais em JS. Uma função é um procedimento de JS
 * -um conjunto de instruções que executa uma tarefa ou um valor. Pàra usar uma funçãoi, vc deve defini-la em 
 * algum ligar no escopo do qual vc quiser chama-la.
 */

function cumprimentar (mensagem) {
    for (let i = 1; i <= repetir; i++ ){
      alert (mensagem)}
}

function soma(num1, num2) {
    let result = num1 + num2
    return result
}

function maiorvalor (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

let resultado = soma(4, 7)
console.log(`O valor da variável resultado é ${resultado}`)
console.log(maiorvalor(5, 18))
// cumprimentar('olá')
// cumprimentar('salve')
// cumprimentar('lalo')
// cumprimentar('pocovo')

const num1 = parseInt(prompt(`Informe o primeiro número`))
const num2 = parseInt(prompt(`Digite o segundo número`))
alert(`O maior número entre esses é ${maiorvalor(num1, num2)}`)
