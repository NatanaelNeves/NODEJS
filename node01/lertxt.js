const fs = require('fs');
const caminho= './arquivostexto'
const codificacao = 'utf-8'
const nomeArquivo = 'melhorMusica.txt'

fs.readFile(`${caminho}/${nomeArquivo}`, codificacao, (erro, conteudo) => {
    console.log(`Conteúdo do arquivo: ${conteudo} \n Autora: Toddynho, Jojo (2019)`)
})
