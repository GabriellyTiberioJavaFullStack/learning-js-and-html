/**
 * operadores lógicos
 */

//operador E

// V --> Verdadeiro
// F --> Falso

/**
 * V V --> V
 * F V --> F
 * V F --> F
 * F F --> F
 */

// média precisa ser maior ou igual a 7 e precisa ter, no mínimo, 80% de presença

const média = (3.5 + 6 + 10) / 3
const presença = 0.7

console.log(média >=7 && presença >= 0.8 )

//operador OU
/**
 * V V --> V
 * F V --> V
 * V F --> V
 * F F --> F
 */

console.log(6 > 7 || 3 < 2) //false
console.log(5 > 3.2 || 7 > 8) //true

/**
 * 0 = desligado (false)
 * 1 = ligado (true)
 */

/**
 * not V --> F
 * not F --> V
 */

//exclamação significa dar o resultado contrario
const resultado = 5 < 3
console.log(!resultado)