var usuario;
var mensagem;

usuario = 'Lucas';
mensagem = 'Olá!';

var nome = document.getElementById('nomeUsuario');
nome.innerHTML = usuario;

var mensagemOla = document.getElementById('mensagemUsuario');
mensagemOla.innerHTML = mensagem + ' ' + usuario;