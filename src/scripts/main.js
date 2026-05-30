// Lista de frases da sorte
const frases = [
    "A vida trará grandes surpresas e alegrias em breve.",
    "Acredita em ti e o universo acreditará contigo.",
    "O teu esforço de hoje será o teu sucesso de amanhã.",
    "Grandes jornadas começam com um pequeno passo.",
    "A tua paciência será recompensada de forma inesperada.",
    "Alguém está a torcer muito pelo teu sucesso neste momento."
];

// Captura os elementos do teu HTML
const btnAbrir = document.getElementById('btn-abrir');
const campoMensagem = document.getElementById('mensagem');
const emojiBiscoito = document.getElementById('biscoito-emoji');

// Evento de clique no botão
btnAbrir.addEventListener('click', function() {
    // 1. Sorteia uma frase aleatória da lista
    const fraseSorteada = frases[Math.floor(Math.random() * frases.length)];
    
    // 2. Atualiza o texto no ecrã
    campoMensagem.textContent = fraseSorteada;
    
    // 3. Muda o emoji para dar um efeito de que o biscoito quebrou/abriu
    emojiBiscoito.textContent = "🥠✨";
});