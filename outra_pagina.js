function pagina() {
    var nome = document.querySelector('.caixa-texto').value;
    var sobrenome = document.querySelector('.caixa-texto2').value;
    var email = document.querySelector('.caixa-texto3').value;
    var senha = document.querySelector('.caixa-texto4').value;

    var mensagemElemento = document.getElementById('mensagem');

    if (nome === "" || sobrenome === "" || email === "" || senha === "") {
        mensagemElemento.textContent = "Preencha todos os campos antes de criar a conta.";
        mensagemElemento.style.color = "red";
        
    } else {
        // Se todos os campos estiverem preenchidos, você pode prosseguir com a criação da conta ou redirecionar para outra página
        mensagemElemento.textContent = "Conta criada com sucesso!";
        mensagemElemento.style.color = "green";

        // Redireciona para a página desejada após 2 segundos (2000 milissegundos)
        setTimeout(function() {
            window.location.href = "paginaprincipal.html"; // Substitua pelo nome da sua outra página
        }, 2000);
        
        // Aqui você pode adicionar lógica para criar a conta ou redirecionar para outra página
        // Exemplo: window.location.href = "pagina_sucesso.html";
    }
}