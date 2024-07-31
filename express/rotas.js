const express = require('express');
const app = express();

//um array com produtos contendo id, nome e preço de cada produto
const produtos = [
  { id: 1, nome: 'Caneta', preco: 1.99 },
  { id: 2, nome: 'Lápis', preco: 0.99 },
  { id: 3, nome: 'Borracha', preco: 0.49 }
];

// array com 4 usuarios contendo id e nome de cada usuario
const usuarios = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'José' },
  { id: 4, nome: 'Ana' }
];

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/sobre', (req, res) => {
  res.send('Sobre');
})



app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(usuario => usuario.id == id);
    if(usuario){
        res.json(usuario);
    }else{
        res.status(404).send('Usuário não encontrado');
    }
})

app.get('/usuarios', (req,res) => {
    const nome = req.query.nome
    let usuario = usuarios
    if(nome){
        usuario = usuarios.filter(usuario => usuario.nome == nome);
    }
    res.status(200)
    res.json(usuario);

})






app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    if(!usuario || !usuario.nome){
        let objErro = {
            statusCode: 400,
            mensagem: 'Usuário inválido'
        }
        res.status(400).json(objErro);
        return;
    }
    usuarios.push(usuario);
        let objSucesso = {
            statusCode: 201,
            mensagem: 'Usuário criado com sucesso',
            detalhes: usuario
        }
        res.status(201).json(objSucesso);
})


app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    if(!usuario || !usuario.nome){
        let objErro = {
            statusCode: 400,
            mensagem: 'Usuário inválido',
            infoUsuario: usuario
        }
        res.status(400).json(objErro);
        return;
    }
    const index = usuarios.findIndex(usuario => usuario.id == id);
    if(index == -1){
        let objErro = {
            statusCode: 404,
            mensagem: 'Usuário não encontrado'
        }
        res.status(404).json(objErro);
        return;
    }
    usuarios[index] = usuario;
    let objSucesso = {
        statusCode: 200,
        mensagem: 'Usuário atualizado com sucesso',
        detalhes: usuario
    }
    res.status(200).json(objSucesso);
})

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const index = usuarios.findIndex(usuario => usuario.id == id);
    if(index == -1){
        let objErro = {
            statusCode: 404,
            mensagem: 'Usuário não encontrado'
        }
        res.status(404).json(objErro);
        return;
    }
    usuarios.splice(index, 1);
    let objSucesso = {
        statusCode: 200,
        mensagem: 'Usuário removido com sucesso'
    }
    res.status(200).json(objSucesso);
})



app.listen(3000, () => {
    console.log('Servidor está rodando http://localhost:3000');
  })