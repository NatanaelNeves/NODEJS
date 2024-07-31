 const estoque = require('./estoque');
const Bebida = require('./bebida');
const Alimento = require('./alimento');

const supermercado = new estoque();

const cerveja = new Bebida('Cerveja', 10, '10/10/2021', 'Alcoólica', '1L');
const refrigerante = new Bebida('Refrigerante', 5, '10/10/2021', 'Não Alcoólica', '2L');
const arroz = new Alimento('Arroz', 20, '10/10/2022', 'Não perecível', '1kg');
const carne = new Alimento('Carne', 30, '10/10/2022', 'Perecível', '1kg');

supermercado.adicionarProduto(cerveja);
supermercado.adicionarProduto(refrigerante);
supermercado.adicionarProduto(arroz);
supermercado.adicionarProduto(carne);

supermercado.listarProdutos();

supermercado.removerProduto(cerveja);

supermercado.listarProdutos();
