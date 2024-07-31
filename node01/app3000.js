 const http = require('http');
 const porta = 3000;

 const carro = require('./atividade1').carro;

    const servidor = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(carro.descricao());
        res.end();
    })
    servidor.listen(porta)

