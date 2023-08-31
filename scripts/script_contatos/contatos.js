const fechar = document.querySelector('#fechar')
const abrir = document.querySelector('#abrirCont')
const section = document.querySelector('#contatos')
const div = document.querySelector('#blocoContato')
let key = 1

//Evita fechar caso eu clique na parte azul
div.addEventListener('click', fecharFora)
div.addEventListener('touchstart', fecharFora)

function fecharFora(event){
    if(event.type === 'touchstart' || event.pointerType === 'touch'){
        event.preventDefault();
    } 
    event.stopPropagation()
    console.log('fefef')
}
//Evita fechar caso eu clique na parte azul

function meuContato(event){
    if(event.type === 'touchstart' || event.pointerType === Touch){
        event.preventDefault();
    } 
    const container = document.querySelector('#contatos')
    const navbar = document.querySelector('#navbar')
    const body = document.querySelector('body')
    event.stopPropagation()

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
section.addEventListener('click', meuContato)
section.addEventListener('touchstart', meuContato)
