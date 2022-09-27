// objeto é uma estrutura que permite organizar dados na forma de chave-valor

let end = {
    rua: 'rua',
    numero: 345,
    estado: 'RJ',
    complemento: 'sem complemento',
    cep: '00000-000'
}

let pessoa = {
    nome: 'gabs',
    idade: 23,
    cpf: '000.000.000-95',
    altura: 155,
    endereço: {...end}, 
    solteiro: true,
    habilidades: ['a', 'b', 'c'],
    cumprimentar() {
        console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    }
}

// console.log(end)
// console.log(pessoa.habilidades[2])
// console.log(pessoa.endereço.numero)
pessoa.cumprimentar()

pessoa.nome = 'duda'
pessoa.cumprimentar()

pessoa.habilidades.push('d')
console.log(pessoa.habilidades)

console.log(pessoa['cpf'])

console.log(end.rua)
console.log(pessoa.endereço.rua)

pessoa.endereço.rua = 'ruaaaa'

console.log|(pessoa.endereço.rua)
console.log()
