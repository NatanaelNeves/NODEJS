// (/) ----> informacoes api
// (/funcionarios) ----> lista de funcionarios
// (/funcionarios/desenvolvedores) ----> lista de desenvolvedores

const http = require('http');
const todosFuncionarios = require('./listaFunc');
const desenvolvedores = todosFuncionarios.filter(funcionario => funcionario.cargo.includes('Desenvolvedor'));
const server = http.createServer((req, res) => {
    if (req.url === '/ ') {
        res.write('API DEV 1.0' + '\n' + 'Para acessar a lista de funcionários, acesse /funcionarios' + '\n' + 'Para acessar a lista de desenvolvedores, acesse /funcionarios/desenvolvedores'); 
    }
    if (req.url === '/funcionarios') {
        res.write(JSON.stringify(todosFuncionarios));
    }
    if (req.url === '/funcionarios/desenvolvedores') {
        res.write(JSON.stringify(desenvolvedores));
    }
    res.end();
}
);

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

