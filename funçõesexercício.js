// criem uma função que gera o resultado de uma equação do segundo grau
// ax ** 2 + bx + c = 0

function baskara (a, b, c) {
    let delta = b ** 2 - 4 * a * c
    let result = Math.sqrt(delta)

    const x1=(-b + result)/(2 * a)
    const x2=(-b - result)/(2*a)

    return [x1, x2]
    
}

console.log(baskara(1, -1, -12))