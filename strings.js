//delimitação de strings

const aspasSimples = 'Olá, mundo'
console.log(aspasSimples)

//caracteres de escapa

const aspasDuplas = "OiOi, sou o \n javascript."
console.log(aspasDuplas)

//crase 
const textoComCrase =`oiee kk
lkll
otr`
console.log(textoComCrase)

//metodos das strings

const texto ='Minha gatinha, Luna, é linda, linda. '

console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat('Juro muito linda.'))
//substring pega á partir do índice (primeiro numero) ate o indice anterior ao (segundo numero)
console.log(texto.substring(15, 19))

//substitui apenas a primeira aparição
console.log(texto.replace('linda' , 'maravilhosa'))
//substitui tds as apariçoes
console.log(texto.replaceAll('linda', 'maravilhosa' ))

//substitui tds tbm
//gi ignora as letras maiusculas/minusculas
console.log(texto.replace(/linda/g, 'gata'))
console.log(texto.replace(/linda/gi, 'gata'))

const html = '<!DOCTYPE html>\n<html></html'

console.log(html.startsWith('<!DOCTYPE html>'))
console.log(html.startsWith('gatinhooooo'))

console.log(html.endsWith('</body>'))

const mensagem = '           gatinhoooosss                     '
console.log(mensagem)
console.log(mensagem.trim())

let senha = 'sonic'
console.log(senha.length)
console.log(senha.length >= 8)
