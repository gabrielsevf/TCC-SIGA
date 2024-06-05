// Adiciona um ouvinte de evento para o formulário de login que é acionado quando o formulário é enviado
document.getElementById("LoginForm").addEventListener("submit", function(event) {
    // Previne o comportamento padrão de envio do formulário, que recarregaria a página
    event.preventDefault();
    
    // Obtém os valores dos campos de usuário e senha
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    
    // Verifica se o nome de usuário e a senha são iguais aos valores esperados
    if (username === "aluno" && password === "123") {
        // Se os valores estiverem corretos, armazena um item no localStorage indicando que o usuário está logado
        localStorage.setItem("isLoggedIn", "true");
        // Redireciona o usuário para a página home.html
        window.location.href = "./html/home.html";
    } else {
        // Se o nome de usuário ou a senha estiverem incorretos, exibe um alerta informando ao usuário
        alert("Usuário ou senha está incorreto.");
    }
});