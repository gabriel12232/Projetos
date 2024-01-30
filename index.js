

let firstName = prompt('Favor digitar o seu nome: ')

document.getElementById('nome').innerHTML = firstName

function login() {
    var email = document.querySelector('.caixa-texto').value;
    var senha = document.querySelector('.caixa-texto2').value;
    var nomeElemento = document.getElementById('nome');
    var mensagemElemento = document.getElementById('mensagem');

    // Simulação de credenciais válidas (devem ser verificadas no lado do servidor em um ambiente real)
    var emailValido = "carraro1538@gmail.com";
    var senhaValida = "senha123";
    var nome = "Gabriel"; // Substitua isso pelo nome do usuário que desejar

    if (email === emailValido && senha === senhaValida) {
        nomeElemento.textContent = nome;
        mensagemElemento.textContent = "Login bem-sucedido!";
        mensagemElemento.style.color = "green";

         // Redireciona para a página desejada após 2 segundos (2000 milissegundos)
         setTimeout(function() {
            window.location.href = "paginaprincipal.html"; // Substitua pelo nome da sua outra página
        }, 2000);

    } else {
        mensagemElemento.textContent = "Credenciais inválidas. Por favor, tente novamente.";
        mensagemElemento.style.color = "red";
    }
}

function create() {
    // Redireciona para a página desejada após 2 segundos (2000 milissegundos)
    setTimeout(function create() {
        window.location.href = "outra_pagina.html"; // Substitua pelo nome da sua outra página
    }, 500);

}