//Calcular o salário de um funcionário considerando horas trabalhadas e valor por hora.

function salario(horas, valor) {
    return horas * valor;
}

//Criar um objeto representando um carro com atributos e um método que retorna a descrição do carro.

const carro = { 
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2010,
    descricao: function() {
        return 'Carro: ' + this.marca + ' ' + this.modelo + ' ' + this.ano;
    }
}

module.exports = { salario, carro };
