const fs = require('fs');
const caminho= './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo = 'receita.txt'
const caminhoArquivo = `${caminho}/${nomeArquivo}`
const conteudo= 'Bolo de cenoura\n\nIngredientes:\n\n- 3 cenouras médias\n- 4 ovos\n- 1 xícara de óleo\n- 2 xícaras de açúcar\n- 2 xícaras de farinha de trigo\n- 1 colher de fermento em pó\n\nModo de preparo:\n\n1. Em um liquidificador, bata as cenouras, os ovos e o óleo.\n2. Em uma tigela, misture o açúcar e a farinha de trigo.\n3. Adicione a mistura do liquidificador e mexa bem.\n4. Por último, adicione o fermento e mexa delicadamente.\n5. Asse em forno médio por 40 minutos.'

fs.writeFile(caminhoArquivo, conteudo, (erro, dados) => { 
    if (erro) {
        console.log(erro)
    } else {
        console.log('Arquivo criado com sucesso!')
        console.log('Conteúdo do arquivo:')
        console.log(conteudo)
    }
} )