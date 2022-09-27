//criar um novo array
const nums = []

//criar um loop que execute 6 vezes
for(let i=1; i <= 6; i++) {
    const n = parseInt(prompt(`Digite o ${i}° número `))
    nums.push(n)
}

//separar os pares dos ímpares
const pares = []
const ímpares = []

//percorrer o array com os números informados
//criar um variável que guardará os valores de cada posição do array
for (let número of nums) {
    // seperar os valores pares dos ímpares, colocando cada valor no seu respectivo array

    // se o resto da divisão(%) for igual a 0, o número é par
    if (número % 2 == 0) {
        pares.push(número)
    }
    else {
        ímpares.push(número)
    }
}

alert(`Nós temos ${pares.length} valores pares: ${pares.join(', ')}`)

alert(`Nós temos ${ímpares.length} valores ímpares: ${ímpares.join(', ')}`)