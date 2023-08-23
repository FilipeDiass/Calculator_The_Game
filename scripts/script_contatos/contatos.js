const fechar = document.querySelector('#fechar')
const abrir = document.querySelector('#abrirCont')
let key = 1

function meuContato(event){
    if(event.type === 'touchstart' || event.pointerType === Touch){
        event.preventDefault();
    } 
    const container = document.querySelector('#contatos')
    const navbar = document.querySelector('#navbar')
    const body = document.querySelector('body')
    
    if(key === 1){
        container.style.display = 'none'
    }
   
    if(container.style.display == 'none'){
        container.style.display = 'flex'
        key = 0
    
        if(window.innerWidth >= 950 && window.innerHeight >= 670){
            navbar.classList.remove('ativo')
        }else{
            navbar.classList.toggle('ativo')
            body.style.overflow = 'hidden'
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
