// As classes Carros e Moto devem fazer a modificação da função Exibir informações da superclasse Veículos de forma a mostrar os atributos específicos delas.

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
    exibirInformacoes(){
        super.exibirInformacoes();
        console.log(`Número de Portas: ${this.numPortas}, Tipo de Combustível: ${this.tipoCombustivel}`);
    }
}

class Moto extends Veiculo{
    constructor(marca, modelo, ano, preco, cilindrada, tipoPartida){
        super(marca, modelo, ano, preco);
        this.cilindrada = cilindrada;
        this.tipoPartida = tipoPartida;
    }
    exibirInformacoes(){
        super.exibirInformacoes();
        console.log(`Cilindrada: ${this.cilindrada}, Tipo de Partida: ${this.tipoPartida}`);
    }
}

const veiculo1 = new Veiculo('Fiat', 'Uno', 2020, 30000);
veiculo1.exibirInformacoes();

const carro1 = new Carro('Fiat', 'Palio', 2019, 35000, 4, 'Flex');
carro1.exibirInformacoes();

const moto1 = new Moto('Honda', 'CG 160', 2020, 12000, 160, 'Elétrica');
moto1.exibirInformacoes();

