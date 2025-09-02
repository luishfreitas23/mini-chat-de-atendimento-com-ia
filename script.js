function responder() {
    const input = document.getElementById('pergunta');
    const mensagens = document.getElementById('mensagens');

    const pergunta = input.value.trim();
    if (pergunta == "") return;

    mensagens.innerHTML += `<p><b>Você:</b>${pergunta}</p>`;

    let resposta = "Desculpe, não entendi.";

    if (pergunta.toLowerCase().includes("horario")) {
        resposta = "Nosso horario de atendimento é das 08 às 16 horas."

    } else if(pergunta.toLowerCase().includes("preço")){
        resposta ="Os preços variam conforme o produto. Você deseja falar com um dos nosso atendentes?"
    } else if(pergunta.toLowerCase().includes("curso")){
        resposta = "Temos cursos de HTML, CSS e Javascript disponiveis.";
    }

mensagens.innerHTML += `<p><b>Bot:</b>${reposta}</p>`;
input.value = "";
}
