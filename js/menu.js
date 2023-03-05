// const $ = document.querySelector.bind(document)
// const botaoAbrir = $('.menu-abrir')
// const botaoFechar = $('.menu-fechar')

document.querySelector('.menu-abrir').onclick = () => {
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = () => {
    document.documentElement.classList.remove('menu-ativo');
};

document.documentElement.onclick = e => {
    if(e.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo')
    }
};