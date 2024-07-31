
const Animal = require('./animal.js');


class AnimaisVoadores extends Animal{
    constructor(especie, tamanho, cor, nome, qtdAsas){
        super(especie, tamanho, cor, nome);
        this.qtdAsas = qtdAsas;
    }
    voar(){console.log(`O animal ${this.nome} voou`);}
}

// class AnimaisNadadores extends Animal{
//     constructor(especie, tamanho, cor, nome, qtdNadadeiras){
//         super(especie, tamanho, cor, nome);
//         this.qtdNadadeiras = qtdNadadeiras;
//     }
//     nadar(){console.log(`O animal ${this.nome} nadou`);}
// }

class AnimalVoaAnda extends AnimaisVoadores{
    constructor(especie, tamanho, cor, nome, qtdAsas){
        super(especie, tamanho, cor, nome, qtdAsas);
    }
    andar()
    {console.log(`O animal ${this.nome} andou`);}
}

class VoaNadaAnda extends AnimalVoaAnda{
    constructor(especie, tamanho, cor, nome, qtdAsas){
        super(especie, tamanho, cor, nome, qtdAsas);
        this.qtdAsas = qtdAsas;
    }
    nadar(){console.log(`O animal ${this.nome} nadou`);}
}


const animal1 = new VoaNadaAnda('Pato', 'pequeno', 'branco', 'Donald', 2);
console.log(animal1);
animal1.voar();
animal1.andar();
animal1.nadar();
animal1.falar();
animal1.comer();

const animal2 = new AnimaisVoadores('Borboleta', 'pequeno', 'colorido', 'Bela', 4);
animal2.voar();
animal2.falar();
console.log(animal2);

const animal3 = new AnimalVoaAnda('Pombo', 'pequeno', 'cinza', 'Pombinho', 2);
console.log(animal3);
animal3.andar();
animal3.voar();
animal3.falar();
animal3.comer();
