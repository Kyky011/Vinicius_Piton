document.addEventListener('DOMContentLoaded', function () {
    const aumentaFonte = document.getElementById('aumentar-fonte');
    const diminuiFonte = document.getElementById('diminuir-fonte');
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoes = document.getElementById('opcoes-acessibilidade');

    let tamanhoFonte = 1;

    aumentaFonte.addEventListener('click', () => {
        tamanhoFonte += 0.1;
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    });

    diminuiFonte.addEventListener('click', () => {
        tamanhoFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoFonte}rem`;
    });

    botaoAcessibilidade.addEventListener('click', () => {
        opcoes.classList.toggle('apresenta-lista');
    });
});