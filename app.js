// Gera um número aleatório de 1 a 10 e guarda na variável
let numeroSecreto = gerarNumeroAleatorio();

// Mensagem padrão que será substituída ao final (não usada diretamente)
let mensagemTentativas = `Você descobriu o número secreto com 5 tentativas!`;

// Contador de tentativas inicializado em 1
let tentativas = 1;

// Função para exibir um texto dentro de uma tag HTML (como h1 ou p)
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() { 
    // Exibe o título do jogo na tela
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    // Exibe instrução inicial para o jogador
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}

exibirMensagemInicial();

// Função que verifica o chute do jogador
function verificarChute() {
    // Captura o valor digitado no campo de entrada
    let chute = document.querySelector('input').value;
    
    // Se o chute estiver correto
    if (chute == numeroSecreto) {
        // Exibe mensagem de acerto
        exibirTextoNaTela('h1', 'Acertou!');

        // Define a palavra 'tentativa' ou 'tentativas' conforme o número
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        // Cria mensagem personalizada informando número de tentativas
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 

        // Exibe a mensagem no parágrafo
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // Se o chute for maior que o número secreto
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            // Se o chute for menor que o número secreto
            exibirTextoNaTela('p', 'O número secreto é maior');
        }

        // Incrementa a variável de tentativas
        tentativas++;
    }

}

// Função que retorna um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
//Código omitido

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//Código omitido

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}