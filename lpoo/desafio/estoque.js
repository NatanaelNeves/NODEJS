const Produto = require('./produto');
const Bebida = require('./bebida');
const Alimento = require('./alimento');

class estoque{
    constructor(){
        this.produtos = [];
    }

    adicionarProduto(produto){
        this.produtos.push(produto);
    }

    removerProduto(produto){
        const index = this.produtos.indexOf(produto);
        if(index != -1){
            this.produtos.splice(index, 1);
        }
    }

    listarProdutos(){
        this.produtos.forEach(produto => {
            produto.exibirInfo();
            console.log();
        });
    }
}

module.exports = estoque;
