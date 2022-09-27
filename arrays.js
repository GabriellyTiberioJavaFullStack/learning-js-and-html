/**
 * Arrays ou Vetores é um tipo especial que te permite armazenar diversos valores
 * 
 * Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos são fixos. Já que o tamanho de um array pode ser alterado a qualquer momento.
 * em apenas um local
 * 
 * array é lista em javascript
 */

// criando um Array
/** let arr = new Array() 
 * 
 * let arr2 = new Array(5)
 * significa dizer que  vai ter 5 valores dentro dele, lista de 5 valores
 * 
 * array em js não tem limites, podemos sempre mudar quantos valores um array vai possuir
 * 
 * let arr3 = [] (jeito mais simples ao inves de escrever 'new array')
 * 
 *  */

/**
 * Cada valor de um array é separado por vírgula
 * 
 * Dentro de um array eu posso ter vários tipos de dados (number, string, bool)
 */

/**
 * Posições de um array
 * 
 * -> Cada posição é representada por um número
 * -> A primeira posição de um Array é a posição é a 0
 */ 

/**
 * sempre que você tentar recuperar uma posição que não existe, ele te informará o valor undefined
 */
 let arr = [10, 15, 9.8, 'Eu sou um texto dentro de um array', 'Olá, mundo', true, false, false]
 console.log(arr[6]) // false
 arr[6] = 'Outro texto'
 console.log(arr[6]) // Outro texto
 console.log(arr[8]) // undefined
 arr[8] = 'Agora a posição 8 existe dentro de arr'
 console.log(arr[8])
 console.log(arr)

const lista=['gabs', 'felipe', 'joão', 'rafael', 'joana', 'pedro']
console.log(lista)

lista.push('Fernanda') //add um valor no final do array
console.log(lista)

lista.unshift('luana') //add um valor no início do array
console.log(lista)

lista.pop() //remove o último valor do array

lista.shift() //remove o primeiro valor do array


// concat gera outra lista com o valor no final
console.log(lista.concat('julio'))


console.log(lista.join('-> ')) // gabs -> felipe -> ...

