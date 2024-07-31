 class Produto{
    #preco;
    constructor(nome, preco, dataValidade){
        this.nome = nome;
        this.#preco = preco;
        this.dataValidade = dataValidade;
    }

    get preco(){
        return this.#preco;
    }

    set preco(preco){
        this.#preco = preco;
    }

    exibirInfo(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: ${this.#preco}`);
        console.log(`Data de Validade: ${this.dataValidade}`);
    }
 }

 module.exports = Produto;