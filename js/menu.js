document.querySelector('.menu-abrir').onclick = () => {
    document.documentElement.classList.add('menu-ativo')
}

document.querySelector('.menu-fechar').onclick = e => {
    if(e.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo')
    }
}