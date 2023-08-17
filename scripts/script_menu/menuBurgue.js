//Menu Hambrguer
const burgue = document.querySelector('#menu_burgue');

function menuBurgue(event){
    if(event.type === 'touchstart'|| event.pointerType === Touch) event.preventDefault();
    const navbar = document.querySelector('#navbar');
    navbar.classList.toggle('ativo');
    const ativo = navbar.classList.contains('ativo');
    event.currentTarget.setAttribute('aria-expanded', ativo);
    if(ativo === true){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }

    //Monitorando o Tamanho da Tela
    window.addEventListener('resize', ()=>{
        if(window.innerWidth >= 950 && window.innerHeight >= 670) navbar.classList.remove('ativo')
    })
    //Monitorando o Tamanho da Tela
}

burgue.addEventListener('click', menuBurgue);
burgue.addEventListener('touchstart', menuBurgue);
//Menu Hambrguer