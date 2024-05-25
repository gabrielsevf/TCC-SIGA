document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    
    if (username === "aluno" && password === "123") {
        window.location.href = "aluno.html";
        } else {
            alert("Usuário ou senha incorretos para aluno.");
        }
});