document.addEventListener("DOMContentLoaded", function() {
    // Usar a conexão de banco de dados para consultar o aluno.

    // dados do aluno armazenados na variável alunoData
    var alunoData = {
        foto: "./IMG/justin-biba.jpg",
        nome: "Justin Bieber",
        rm: "20220510055",
        ra: "000109222260-7/SP",
        curso: "Desenvolvimento de Sistemas"
    };

    // Atualiza os elementos HTML com os dados do aluno
    document.getElementById("fotoAluno").src = alunoData.foto;
    document.getElementById("nomeAluno").textContent = alunoData.nome;
    document.getElementById("rmAluno").textContent = "RM: " + alunoData.rm;
    document.getElementById("raAluno").textContent = "RA: " + alunoData.ra;
    document.getElementById("curso").value = alunoData.curso;

    // Adiciona o curso do aluno ao campo de seleção
    var selectCurso = document.getElementById("curso");
    var option = document.createElement("option");
    option.value = alunoData.curso;
    option.text = alunoData.curso;
    selectCurso.appendChild(option);
});

document.getElementById("btnSair").addEventListener("click", function() {
    // Aqui você pode adicionar a lógica para sair do sistema (por exemplo, redirecionamento para a página de login)
    window.location.href = "index.html";
});