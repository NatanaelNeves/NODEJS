//Você foi contratado para desenvolver um sistema de gerenciamento de veículos para uma concessionária de automóveis. O sistema deve permitir que a concessionária gerencie diferentes tipos de veículos, como carros, motos e caminhões.

// //### Classe base - Veiculo:

// - Marca
// - Modelo
// - Ano de Fabricação
// - Preço
// - Exibir informações

// ### Classe derivada - Carro:

// - número de portas
// - tipo de combustível

// ### Classe derivada - Moto:

// - cilindrada
// - tipo de partida


class Veiculo{
    constructor(marca, modelo, ano, preco){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }
    exibirInformacoes(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Preço: ${this.preco}`);
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, ano, preco, numPortas, tipoCombustivel){
        super(marca, modelo, ano, preco);
        this.numPortas = numPortas;
        this.tipoCombustivel = tipoCombustivel;
    }
}

class Moto extends Veiculo{
    constructor(marca, modelo, ano, preco, cilindrada, tipoPartida){
        super(marca, modelo, ano, preco);
        this.cilindrada = cilindrada;
        this.tipoPartida = tipoPartida;
    }
}

const veiculo1 = new Veiculo('Fiat', 'Uno', 2020, 30000);
console.log(veiculo1);
veiculo1.exibirInformacoes();

const carro1 = new Carro('Fiat', 'Palio', 2019, 35000, 4, 'Flex');
console.log(carro1);
carro1.exibirInformacoes();

const moto1 = new Moto('Honda', 'CG 160', 2020, 12000, 160, 'Elétrica');
console.log(moto1);
moto1.exibirInformacoes();

