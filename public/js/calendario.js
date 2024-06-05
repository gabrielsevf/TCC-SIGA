document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do DOM
    const anteriorBtn = document.getElementById('anterior'); // Botão para navegar para o mês anterior
    const proximoBtn = document.getElementById('proximo'); // Botão para navegar para o próximo mês
    const mesAnoTexto = document.getElementById('mes-ano'); // Exibe o mês e o ano atual
    const diasDiv = document.getElementById('dias'); // Contêiner para os dias do calendário

    // Obtém a data atual
    let dataAtual = new Date();
    let mesAtual = dataAtual.getMonth(); // Obtém o mês atual (0-11)
    let anoAtual = dataAtual.getFullYear(); // Obtém o ano atual (YYYY)

    // Função para renderizar o calendário
    function renderizarCalendario() {
        // Limpa os dias anteriores
        diasDiv.innerHTML = '';

        // Obtém o primeiro e último dia do mês atual
        const primeiroDiaDoMes = new Date(anoAtual, mesAtual, 1);
        const ultimoDiaDoMes = new Date(anoAtual, mesAtual + 1, 0);

        // Atualiza o texto do mês e ano
        mesAnoTexto.textContent = `${nomeMes(mesAtual)} ${anoAtual}`;

        // Adiciona espaços vazios para alinhar o primeiro dia do mês com o dia da semana correto
        for (let i = 0; i < primeiroDiaDoMes.getDay(); i++) {
            const diaVazio = document.createElement('div');
            diasDiv.appendChild(diaVazio);
        }

        // Adiciona os dias do mês
        for (let i = 1; i <= ultimoDiaDoMes.getDate(); i++) {
            const dia = document.createElement('div');
            dia.textContent = i;
            diasDiv.appendChild(dia);
        }
    }

    // Função para obter o nome do mês
    function nomeMes(mes) {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[mes];
    }

    // Evento de clique para o botão "anterior"
    anteriorBtn.addEventListener('click', function () {
        // Decrementa o mês atual
        mesAtual -= 1;
        // Verifica se é necessário decrementar o ano
        if (mesAtual < 0) {
            mesAtual = 11;
            anoAtual -= 1;
        }
        // Renderiza o calendário atualizado
        renderizarCalendario();
    });

    // Evento de clique para o botão "próximo"
    proximoBtn.addEventListener('click', function () {
        // Incrementa o mês atual
        mesAtual += 1;
        // Verifica se é necessário incrementar o ano
        if (mesAtual > 11) {
            mesAtual = 0;
            anoAtual += 1;
        }
        // Renderiza o calendário atualizado
        renderizarCalendario();
    });

    // Renderiza o calendário ao carregar a página
    renderizarCalendario();
});