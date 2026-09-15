// Carrossel simples da seção de PROJETOS
// Cada ".projetos-slide" é uma "página" com 3 cards.
// As setas movem o "trilho" (.projetos-track) para a esquerda/direita.

document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('projetosTrack');
    const setaEsquerda = document.getElementById('setaEsquerda');
    const setaDireita = document.getElementById('setaDireita');
    const slides = document.querySelectorAll('.projetos-slide');

    if (!track || !setaEsquerda || !setaDireita || slides.length === 0) {
        return;
    }

    let slideAtual = 0;
    const totalSlides = slides.length;

    function atualizarCarrossel() {
        track.style.transform = 'translateX(-' + (slideAtual * 100) + '%)';
    }

    setaDireita.addEventListener('click', function () {
        // Avança para a próxima página de projetos. Ao chegar no fim, volta para a primeira.
        slideAtual = (slideAtual + 1) % totalSlides;
        atualizarCarrossel();
    });

    setaEsquerda.addEventListener('click', function () {
        // Volta para a página anterior de projetos. Se estiver na primeira, vai para a última.
        slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
        atualizarCarrossel();
    });
});