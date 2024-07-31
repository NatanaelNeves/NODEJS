const fs = require('fs');
const funcionarios = require('./listaFunc');
const caminho = './arquivosTexto';
const codificacao = 'utf-8';
const nomeArquivo = 'funcionarios.json';
const caminhoArquivo = `${caminho}/${nomeArquivo}`;
const funcionariosJSON = JSON.stringify(funcionarios);

fs.writeFile(caminhoArquivo, funcionariosJSON, (erro) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Arquivo criado com sucesso!');
        console.log('Conteúdo do arquivo:');
        fs.readFile(caminhoArquivo, codificacao, (erro, conteudo) => {
            if (erro) throw erro;
            const funcionarios = JSON.parse(conteudo);
            const desenvolvedoresFrontEnd = funcionarios.filter(funcionario => funcionario.cargo === 'Desenvolvedor Front-end');
            console.log(desenvolvedoresFrontEnd);
        });
    }});

    const calcularFolhaPagamento = () => {
        fs.readFile(caminhoArquivo, codificacao, (erro, conteudo) => {
            if (erro) throw erro;
            const funcionarios = JSON.parse(conteudo);
            const totalFolhaPagamento = funcionarios.reduce((total, funcionario) => total + funcionario.salario, 0);
            console.log(`Total da folha de pagamento: ${totalFolhaPagamento}`);
        });
    };

    calcularFolhaPagamento();