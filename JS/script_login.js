document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var userType = document.getElementById("userType").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Verifica o tipo de usuário e redireciona para a página apropriada
    switch(userType) {
        case "aluno":
            if (username === "aluno" && password === "123") {
                window.location.href = "aluno.html";
            } else {
                alert("Usuário ou senha incorretos para aluno.");
            }
            break;
        case "professor":
            if (username === "professor" && password === "123") {
                window.location.href = "professor.html";
            } else {
                alert("Usuário ou senha incorretos para professor.");
            }
            break;
        case "coordenacao":
            if (username === "coordenacao" && password === "123") {
                window.location.href = "coordenacao.html";
            } else {
                alert("Usuário ou senha incorretos para coordenação.");
            }
            break;
        default:
            alert("Tipo de usuário inválido.");
    }
});