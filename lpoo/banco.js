//sistema banco: 
//super classe: conta(titular, agencia, numero da conta, #saldo) ver saldo e sacar
//subclasse: conta corrente (sacar, transferir, depositar, contratar empéstimo)
//subclasse: conta poupança (sacar, depositar, transferir)
//subclasse: conta salario (sacar)

//metodos e atributos:
//conta: ver saldo, sacar
// conta salario: empresa
// conta corrente: limite emprestimo, tem emprestimo?, limite de transferencia, transferir, depositar, se endividar
// conta poupança: transferir, aplicar rendimento ,depositar, data aniversario, rendimento


class Conta{
    #saldo;
    constructor(titular, agencia, numeroConta, saldo){
        this.titular = titular;
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.#saldo = saldo;
    }
    verSaldo(){
        console.log(`Saldo: ${this.saldo}`);
    }
    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        }
        else{
            console.log('Saldo insuficiente');
        }
    }
}

class ContaCorrente extends Conta{
    constructor(titular, agencia, numeroConta, saldo, limiteEmprestimo, limiteTransferencia){
        super(titular, agencia, numeroConta, saldo);
        this.limiteEmprestimo = limiteEmprestimo;
        this.limiteTransferencia = limiteTransferencia;
        this.temEmprestimo = false;
    }
    transferir(valor, conta){
        if(valor <= this.limiteTransferencia){
            this.sacar(valor);
            conta.depositar(valor);
            console.log(`Transferência de R$${valor} realizada com sucesso!`);
        }
        else{
            console.log('Limite de transferência excedido');
        }
    }
    depositar(valor){
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso!`);
    }
    contratarEmprestimo(valor){
        if(valor <= this.limiteEmprestimo){
            this.saldo += valor;
            this.temEmprestimo = true;
            console.log(`Empréstimo de R$${valor} contratado com sucesso!`);
        }
        else{
            console.log('Limite de empréstimo excedido');
        }
    }
}


class ContaPoupanca extends Conta{
    constructor(titular, agencia, numeroConta, saldo, dataAniversario){
        super(titular, agencia, numeroConta, saldo);
        this.dataAniversario = dataAniversario;
    }
    transferir(valor, conta){
        this.sacar(valor);
        conta.depositar(valor);
        console.log(`Transferência de R$${valor} realizada com sucesso!`);
    }
    depositar(valor){
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso!`);
    }
    aplicarRendimento(taxa){
        this.saldo += this.saldo * taxa;
        console.log(`Rendimento aplicado com sucesso!`);
    }
}

class ContaSalario extends Conta{
    constructor(titular, agencia, numeroConta, saldo, empresa){
        super(titular, agencia, numeroConta, saldo);
        this.empresa = empresa;
    }
}

let conta1 = new Conta('Cleiton', '1234', '0001', 1000);
let conta2 = new Conta('Belinha', '1234', '0002', 1000);
let conta3 = new Conta('Cleitinho', '1234', '0003', 1000);

let contaCorrente1 = new ContaCorrente('Cleiton', '1234', '0001', 1000, 5000, 1000);
let contaCorrente2 = new ContaCorrente('Belinha', '1234', '0002', 1000, 5000, 1000);
let contaCorrente3 = new ContaCorrente('Cleitinho', '1234', '0003', 1000, 5000, 1000);

let contaPoupanca1 = new ContaPoupanca('Cleiton', '1234', '0001', 1000, '01/01');
let contaPoupanca2 = new ContaPoupanca('Belinha', '1234', '0002', 1000, '01/01');
let contaPoupanca3 = new ContaPoupanca('Cleitinho', '1234', '0003', 1000, '01/01');

let contaSalario1 = new ContaSalario
('Cleiton', '1234', '0001', 1000, 'Google');
let contaSalario2 = new ContaSalario
('Belinha', '1234', '0002', 1000, 'Facebook');

console.log(conta1);
console.log(conta2);
console.log(conta3);

console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(contaCorrente3);

console.log(contaPoupanca1);
console.log(contaPoupanca2);
console.log(contaPoupanca3);

console.log(contaSalario1);
console.log(contaSalario2);

contaCorrente1.transferir(500, contaCorrente2);
contaCorrente1.transferir(5000, contaCorrente2);
contaCorrente1.depositar(500);
contaCorrente1.contratarEmprestimo(1000);
contaCorrente1.contratarEmprestimo(6000);

contaPoupanca1.transferir(500, contaPoupanca2);
contaPoupanca1.depositar(500);
contaPoupanca1.aplicarRendimento(0.1);

contaSalario1.sacar(500);

console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(contaCorrente3);

console.log(contaPoupanca1);
console.log(contaPoupanca2);
console.log(contaPoupanca3);

console.log(contaSalario1);
console.log(contaSalario2);
