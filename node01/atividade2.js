//Ler o conteúdo de dois arquivos, arquivo1.txt e arquivo2.txt, e concatenar o conteúdo em um novo arquivo chamado arquivoConcatenado.txt.

const fs = require('fs');
const caminho= './arquivostexto'
const codificacao = 'utf-8'
const nomeArquivo = 'arquivo1.txt'
const nomeArquivo2 = 'arquivo2.txt'
const caminhoArquivo = `${caminho}/${nomeArquivo}`
const caminhoArquivo2 = `${caminho}/${nomeArquivo2}`

fs.readFile(caminhoArquivo, codificacao, (err, data1) => {
    if (err) {
        console.error(`Erro ao ler o arquivo ${nomeArquivo}: ${err}`);
        return;
    }

    fs.readFile(caminhoArquivo2, codificacao, (err, data2) => {
        if (err) {
            console.error(`Erro ao ler o arquivo ${nomeArquivo2}: ${err}`);
            return;
        }

        const conteudoConcatenado = `${data1}\n${data2}`;

        fs.writeFile(`${caminho}/arquivoConcatenado.txt`, conteudoConcatenado, (err) => {
            if (err) {
                console.error(`Erro ao escrever o arquivo arquivoConcatenado.txt: ${err}`);
                return;
            }

            console.log('Arquivo arquivoConcatenado.txt criado com sucesso!');
        });
    });
});

