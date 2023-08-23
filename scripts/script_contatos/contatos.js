const fechar = document.querySelector('#fechar')
const abrir = document.querySelector('#abrirCont')

function meuContato(event){
    if(event.type === 'touch' || event.pointerType === Touch) event.preventDefault();
    const container = document.querySelector('#contatos')
    const navbar = document.querySelector('#navbar')
    const body = document.querySelector('body')

    if(container.style.display === 'none'){
        container.style.display = 'flex'
    
        if(window.innerWidth >= 950 && window.innerHeight >= 670){
            navbar.classList.remove('ativo')
        }else{
            navbar.classList.toggle('ativo')
        } 
    }else{
        container.style.display = 'none'
        body.style.overflow = 'auto'
    }
    
}
fechar.addEventListener('click', meuContato)
fechar.addEventListener('touchstart', meuContato)
abrir.addEventListener('click', meuContato)
abrir.addEventListener('touchstart', meuContato)
