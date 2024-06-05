// Função que verifica se o usuário está logado
function checkLoginStatus() {
    // Verifica se o item "isLoggedIn" no localStorage é diferente de "true"
    if (localStorage.getItem("isLoggedIn") !== "true") {
        // Exibe um alerta informando que o usuário precisa estar logado
        alert("Você precisa estar logado para acessar esta página.");
        // Redireciona o usuário para a página de login (index.html)
        window.location.href = "../index.html";
    }
}

// Função que faz o logout do usuário
function logout() {
    // Remove o item "isLoggedIn" do localStorage, deslogando o usuário
    localStorage.removeItem("isLoggedIn");
    // Redireciona o usuário para a página de login (index.html)
    window.location.href = "../index.html";
}