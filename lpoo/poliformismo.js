class Cantor{
    constructor(nome){
        this.nome = nome;
    }
    cantar(){
        console.log(`${this.nome} está cantando`);
    }
}

class Marrone extends Cantor{
    constructor(nome){
        super(nome);
    }
    cantar(){
        console.log(`...`);
    }
}

class Bruno extends Cantor{
    constructor(nome){
        super(nome);
    }
    cantar(){
        super.cantar();
        console.log('Seu guarda eu não sou vagabundo, eu não sou delinquente, sou um cara carente');
    }
}

let cantor1= new Marrone('Marrone');
let cantor2= new Bruno('Bruno');
let cantor3= new Cantor('Roberto Carlos');

cantor1.cantar();
cantor2.cantar();
cantor3.cantar();