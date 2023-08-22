const buttonTuto = document.querySelectorAll('[button]')
const spanTuto = document.querySelectorAll('[span]')

buttonTuto.forEach((element, indice, array)=>{
    function clique(event){
        console.log(event)    
        if(event.type === 'touchstart' || event.pointerType === Touch) event.preventDefault()

        //Fazendo a animação do botão
        element.classList.add('buttonAp')
        setTimeout(()=>{
            element.classList.remove('buttonAp')
            verifica = false
        },110)
        //Fazendo a animação do botão
    
        if(element === array[indice]){
            if(!spanTuto[indice].classList.contains('apagaSpan')){
                spanTuto[indice].classList.toggle('apagaSpan')
            }else{
                spanTuto[indice].classList.toggle('voltaSpan')
            }    
        }
    }


    element.addEventListener('click', clique)
    element.addEventListener('touchstart', clique)
})