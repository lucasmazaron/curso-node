// DOM 
// Declaração de variaveis
var preco;
var quantidade;
var total;

preco = 5;
quantidade = 14;
total = quantidade * preco;

var totalMultiplicacao = document.getElementById('totalCalculo')

totalMultiplicacao.innerHTML = 'R$'+ total;