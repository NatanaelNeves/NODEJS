 const Produto = require('./produto');


class Alimento extends Produto{
    constructor(nome, preco, dataValidade, tipo, peso){
        super(nome, preco, dataValidade);
        this.tipo = tipo;
        this.peso = peso;
    }

    exibirInfo(){
        super.exibirInfo();
        console.log(`Tipo de Alimento: ${this.tipo}`);
        console.log(`Peso: ${this.peso}`);
    }
}

module.exports = Alimento; 