document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Lista de frases (as tuas "sortes")
    const frasesDaSorte = [
        "A tua paciência será recompensada em breve.",
        "Grandes jornadas começam com um pequeno passo.",
        "O sucesso não tarda a chegar à tua vida.",
        "Alguém especial está a pensar em ti neste momento.",
        "A tua criatividade vai resolver um grande problema esta semana.",
        "Foca-te no caminho, não apenas no destino.",
        "A boa fortuna protege os audazes.",
        "Um sorriso teu pode mudar o dia de alguém.",
        "Novas oportunidades surgem para quem sabe esperar.",
        "Confia no teu instinto; ele raramente falha."
    ];

    // 2. Capturar os elementos do HTML
    const btnAbrir = document.getElementById('btn-abrir');
    const txtMensagem = document.getElementById('mensagem');
    const emojiBiscoito = document.getElementById('biscoito-emoji');

    // 3. Evento de clique no botão
    btnAbrir.addEventListener('click', function() {
        
        // Adiciona um efeito visual de animação ao emoji
        emojiBiscoito.classList.add('aberto');
        
        // Remove a animação passado meio segundo para poder ser repetida
        setTimeout(function() {
            emojiBiscoito.classList.remove('aberto');
        }, 500);

        // A LÓGICA DO SORTEADOR:
        // Gera um índice aleatório entre 0 e o tamanho máximo da lista
        const indiceAleatorio = Math.floor(Math.random() * frasesDaSorte.length);
        
        // Seleciona a frase correspondente ao índice sorteado
        const fraseSorteada = frasesDaSorte[indiceAleatorio];

        // Atualiza o texto no ecrã com a frase sorteada
        txtMensagem.innerText = fraseSorteada;
    });
});