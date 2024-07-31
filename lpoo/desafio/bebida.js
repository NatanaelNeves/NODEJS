const Produto = require('./produto');


class Bebida extends Produto{
    constructor(nome, preco, dataValidade, tipo, volume){
        super(nome, preco, dataValidade);
        this.tipo = tipo;
        this.volume = volume;
    }

    exibirInfo(){
        super.exibirInfo();
        console.log(`Tipo de Bebida: ${this.tipo}`);
        console.log(`Volume: ${this.volume}`);
    }
}

module.exports = Bebida;
