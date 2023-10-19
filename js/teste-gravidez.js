const etapas = document.querySelectorAll('.etapa');
let etapaAtual = -1; 

const comecarButton = document.getElementById('comecar');
comecarButton.addEventListener('click', mostrarProximaEtapa);

function mostrarProximaEtapa() {
    if (etapaAtual === -1) {
        etapaAtual = 0;
        comecarButton.style.display = 'none';
        etapas[etapaAtual].style.display = 'block';
    } else if (etapaAtual < etapas.length - 1) {
        const resposta = document.querySelector(`input[name="resposta${etapaAtual + 1}"]:checked`);

        if (!resposta) {
            alert('Por favor, selecione uma resposta antes de continuar.');
            return;
        }

        etapas[etapaAtual].style.display = 'none';
        etapaAtual++;
        etapas[etapaAtual].style.display = 'block';
    } else {
        mostrarResultado();
    }
}

const voltarButton1 = document.getElementById('voltar1');
if (voltarButton1) {
    voltarButton1.addEventListener('click', mostrarPerguntaAnterior);
}

const voltarButtons = document.querySelectorAll('.voltar');
voltarButtons.forEach((voltarButton, index) => {
    voltarButton.addEventListener('click', mostrarPerguntaAnterior);
});

function mostrarPerguntaAnterior() {
    if (etapaAtual > 0) {
        etapas[etapaAtual].style.display = 'none';
        etapaAtual--;
        etapas[etapaAtual].style.display = 'block';
    }
}

const enviarButtons = document.querySelectorAll('.enviar');
enviarButtons.forEach((enviarButton, index) => {
    enviarButton.addEventListener('click', () => {
        mostrarProximaEtapa();
    });
});

function mostrarResultado() {
    const respostasSim = coletarRespostasUsuario();
    const resultado = calcularProbabilidade(respostasSim);
    exibirResultado(resultado);

    const voltarButtons = document.querySelectorAll('.voltar');
    const finalizarButton = document.querySelector('.enviar');
    voltarButtons.forEach((voltarButton) => {
        voltarButton.style.display = 'none';
    });
    finalizarButton.style.display = 'none';
}

function coletarRespostasUsuario() {
    const respostasSim = [];
    for (let i = 1; i <= 10; i++) {
        const resposta = document.querySelector(`input[name="resposta${i}"]:checked`);
        if (resposta && resposta.value === 'sim') {
            respostasSim.push(resposta.value);
        }
    }
    return respostasSim;
}

function calcularProbabilidade(respostasSim) {
    if (respostasSim.length >= 1 && respostasSim.length <= 4) {
        return 'Baixa probabilidade de gravidez';
    } else if (respostasSim.length >= 5 && respostasSim.length <= 7) {
        return 'Média probabilidade de gravidez';
    } else if (respostasSim.length >= 8 && respostasSim.length <= 10) {
        return 'Alta probabilidade de gravidez';
    } else {
        return 'Não foi possível determinar a probabilidade. Consulte um médico.';
    }
}

function exibirResultado(resultado) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<span class="resultado-texto">Resultado:</span> ${resultado}`;
}