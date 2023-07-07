// EX 1
const path = require('path') //identifica os caminhos dos relatorios

// const custumPath = '/relatorios/edrielle/relatoriosemanal.pdf' 

// console.log(path.dirname(custumPath)) // mostra o caminho
// console.log(path.basename(custumPath)) //valida o nome
// console.log(path.extname(custumPath)) //valida a extenção

// EX 2
console.log(path.resolve('teste.txt')) //resulta o todo o caminho

// EX 3 - formatar path
const midFolder = 'relatorios'
const fileName = 'arquivo.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)