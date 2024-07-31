 const http = require('http');
 const porta = 3001;
 
const salario = require('./atividade1').salario;

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Salário: ' + salario(1000, 0.1));
    res.end();
})

servidor.listen(porta);

