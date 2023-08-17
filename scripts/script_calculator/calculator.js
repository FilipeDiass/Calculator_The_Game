const button = document.querySelectorAll('[button]')

//Responsável por abrir e fechar os niveis.
let lvl = 0
let auxlvl = null
//Responsável por abrir e fechar os niveis.

// variavel usada para implementar o Menu
const containerButton = document.querySelector('#container_buttom')
// variavel usada para implementar o Menu

button.forEach((element, indice, array) => {
    function apertarButton(event){

        //Verificação dos 'clicks'
        let verifica = false
        if(event.type === 'touchstart' || event.pointerType === Touch){
            if(!verifica){
                verifica = true
                event.preventDefault()
                element.classList.add('customButton')

                //Fazendo a animação do botão subir
                setTimeout(()=>{
                    element.classList.remove('customButton')
                    verifica = false
                },150)
                //Fazendo a animação do botão subir
            }
        } 
        
        console.log(event)
        //Verificação dos 'clicks'

        //Menu do jogo
        if(element === array[6] && array[6].classList.contains('buttonYellow')){
            containerButton.classList.toggle('menuCalc')
            if(containerButton.classList.contains('menuCalc')){
                if(keyMenu === 0){
                    auxlvl = String(lvl)
                }
                lvl = null
                menu(element, indice, array)
            }else{
                menu(element, indice, array)
                lvl = Number(auxlvl)
            }  
        }else if((element === array[3] || element === array[5] ||  element === array[7]) && element.classList.contains('buttonBlueBlackLR')){
            menu(element, indice, array)
        }
        //Menu do jogo

        
            //Inicio do Jogo (level 0)
            if(lvl === 0){
                inicioJogo(array[4], array[1], element)
            }
            //Inicio do Jogo (level 0)

            //level 01 do jogo
            if(lvl === 1){
                nivel1(element, indice, array)
            }
            //level 01 do jogo

            //level 1.5 do jogo
            if(lvl === 1.5){
                nivelUm5(element, indice, array)
            }
            //level 1.5 do jogo

            //level 02 do jogo
            if(lvl === 2){
                nivel2(element, indice, array)
            }
            //level 02 do jogo

            //level 2.5 do jogo
            if(lvl === 2.5){
                nivelDois5(element, indice, array)
            }
            //level 2.5 do jogo

            //Level 03 do jogo 
            if(lvl === 3){
                nivel3(element, indice, array)
            }
            //Level 03 do jogo

            //Level 3.5 do jogo 
            if(lvl === 3.5){
                nivelTres5(element, indice, array)
            }
            //Level 3.5 do jogo 

            //Level 4 do jogo 
            if(lvl === 4){
                nivel4(element, indice, array)
            }
            //Level 4 do jogo 

            //Level 4.5 do jogo 
            if(lvl === 4.5){
                nivelQuatro5(element, indice, array)
            }
            //Level 4.5 do jogo 

            //Level 5 do jogo 
            if(lvl === 5){
                nivel5(element, indice, array)
            }
            //Level 5 do jogo

            //Level 6 do jogo 
            if(lvl === 6){
                nivel6(element, indice, array)
            }
            //Level 6 do jogo

            //Level 7 do jogo 
            if(lvl === 7){
                nivel7(element, indice, array)
            }
            //Level 7 do jogo

            //Level 7.5 do jogo 
            if(lvl === 7.5){
                nivelSete5(element, indice, array)
            }
            //Level 7.5 do jogo

            //Level 8 do jogo 
            if(lvl === 8){
                nivel8(element, indice, array)
            }
            //Level 8 do jogo

            //Level 9 do jogo 
            if(lvl === 9){
                nivel9(element, indice, array)
            }
            //Level 9 do jogo

            //Level 10 do jogo 
            if(lvl === 10){
                nivel10(element, indice, array)
            }
            //Level 10 do jogo

            //Level 11 do jogo 
            if(lvl === 11){
                nivel11(element, indice, array)
            }
            //Level 11 do jogo

            //Level 12 do jogo 
            if(lvl === 12){
                nivel12(element, indice, array)
            }
            //Level 12 do jogo

            //Level 13 do jogo 
            if(lvl === 13){
                nivel13(element, indice, array)
            }
            //Level 13 do jogo

            //Level 14 do jogo 
            if(lvl === 14){
                nivel14(element, indice, array)
            }
            //Level 14 do jogo

            //Level 14.5 do jogo 
            if(lvl === 14.5){
                nivelQuatorze5(element, indice, array)
            }
            //Level 14.5 do jogo

            //Level 15 do jogo 
            if(lvl === 15){
                nivel15(element, indice, array)
            }
            //Level 15 do jogo

            //Level 16 do jogo 
            if(lvl === 16){
                nivel16(element, indice, array)
            }
            //Level 16 do jogo

            //Level 17 do jogo 
            if(lvl === 17){
                nivel17(element, indice, array)
            }
            //Level 17 do jogo

            //Level 18 do jogo 
            if(lvl === 18){
                nivel18(element, indice, array)
            }
            //Level 18 do jogo

            //Level 19 do jogo 
            if(lvl === 19){
                nivel19(element, indice, array)
            }
            //Level 19 do jogo

            //Level 20 do jogo 
            if(lvl === 20){
                nivel20(element, indice, array)
            }
            //Level 20 do jogo

    }

    element.addEventListener('click', apertarButton)
    element.addEventListener('touchstart', apertarButton)
})


/* DADOS GERAIS DOS LEVEIS */

let emote = document.querySelector('#emote')

//Frases a exibida no inicio meio e fim.
const arrayScreen = [
    'EU ME CHAMO CLICKY!', 'QUER JOGAR UM JOGO?', 'OK, ESTA VENDO ESSE NUMERO?',
    'ESSE E O OBJETIVO!', 'ESTA VENDO ESSE NUMERO?', 'E O NUMERO DE MOVIMENTOS QUE PODE SER FEITO.',
    'PRESSIONE OS BOTOES ATE ATINGIR O OBJETIVO.', 'ENTENDEU?', 'LEGAL, AQUI E O LEVEL UM!']

const arrayButton = ['Oi, CLICKY!', 'CLARO!', 'ESTOU!', 'OK', 'SIM!', 'ENTENDI', 'OK!', 'SIM', 'BELEZA!']

const svgDica = '<svg class="svgdicas"xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"/></svg>'

const emoteNormal = '<svg class="emote" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M320-480v80q0 66 47 113t113 47q66 0 113-47t47-113v-80H320Zm160 180q-42 0-71-29t-29-71v-20h200v20q0 42-29 71t-71 29ZM340-680q-38 0-67.5 27.5T231-577l58 14q6-26 20-41.5t31-15.5q17 0 31 15.5t20 41.5l58-14q-12-48-41.5-75.5T340-680Zm280 0q-38 0-67.5 27.5T511-577l58 14q6-26 20-41.5t31-15.5q17 0 31 15.5t20 41.5l58-14q-12-48-41.5-75.5T620-680ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"/></svg>'

const emoteDerrota = '<svg class="emote" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m298-456 143-104-143-104-36 48 77 56-77 56 36 48Zm364 0 36-48-77-56 77-56-36-48-143 104 143 104ZM420-278l60-60 60 60 60-60 39 39 42-42-81-81-60 60-60-60-60 60-60-60-81 81 42 42 39-39 60 60Zm60 198q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"/></svg>'

const emoteTedio = '<svg class="emote" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm20 194h253v-49H354v49ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"/></svg>'

const svgAvancar = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg>'

const svgVoltar = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z"/></svg>'
//Frases a exibida no inicio meio e fim.

//Variáveis de ligamento da tela
const screen = document.querySelector('#text_screen')
const txtScreen = document.querySelector('#txt_front')
//const txtScreenBack =document.querySelector('#txt_back')
const goalTxt = document.querySelector('#goal')
const moviesTxt = document.querySelector('#movies')
const levelTxt = document.querySelector('#levelTxt')
//Variáveis de ligamento da tela

//Dados a serem guardados dos leveis
let mov = null
let goal = null
let numScreen = null
let conLvl = null
let keyLoop = null
let clrRed = null
let nextLvl = 1
let keylvl = 1
let stopLoop = 0
let keyNumScreen = 0
let numDica = 15
//Dados a serem guardados dos leveis

/* DADOS GERAIS DOS NIVEIS */


/* MENU DO JOGO */

//Variáveis de controle da função menu
let keyMenu = 0
let keyLibera = 1
//Variáveis de controle da função menu
function menu(element, indice, array){

    if(containerButton.classList.contains('menuCalc')){
        emote.innerHTML = emoteTedio
        if(element === array[6]){
            for(let i = 0; i < array.length; i++){
                array[i].classList.remove('buttonBlack', 'buttonRed', 'buttonGreen')
                array[i].classList.add('buttonN')
            }
            //Organizando a tela
            array[6].classList.remove('buttonN') 
            screen.style.justifyContent = 'center'
            txtScreen.textContent = 'PAUSADO'
            txtScreen.style.fontSize = '55px'
            //Organizando a tela
            
            //botão de dicas
            if(auxlvl > 4){
                array[0].classList.remove('buttonN')
                array[0].classList.add('buttonBlue')
                array[0].innerHTML = `${svgDica} ${numDica}`
                array[0].style.fontSize = '0.9em'
            }
            //botão de dicas

            //botão que diminui os leveis
            array[3].classList.remove('buttonN')
            array[3].classList.add('buttonBlueBlackLR')
            array[3].innerHTML = svgVoltar
            //botão que diminui os leveis
    
            //botão que mostra os leveis
            array[4].classList.remove('buttonN')
            array[4].classList.add('buttonBlueBlack')
            array[4].style.fontSize = '15px'
            array[4].innerHTML = `<p id="buttonLevel">Level</p> <p id="buttonNumber">${auxlvl}</p>`
            //botão que mostra os leveis
    
            //botão que aumenta os leveis
            array[5].classList.remove('buttonN')
            array[5].classList.add('buttonBlueBlackLR')
            array[5].innerHTML = svgAvancar
            //botão que aumenta os leveis

            //botão que libera os leveis
            array[7].classList.remove('buttonN')
            array[7].classList.add('buttonBlueBlackLR')
            array[7].style.fontSize = '15px'
            array[7].textContent = 'Liberar Niveis'
            //botão que libera os leveis
    
            if(keyLoop === 0){
                stopLoop = 1
            }

            //Abrir a config do campo de texto
            keyFecharTxtButton = 1
            //Abrir a config do campo de texto

            //Controle das Dicas
            if(keyDicas !== 1000){
                keyDicas = 0
            }
            //Controle das Dicas

        }else if(element === array[3] || element === array[5] || element === array[7]){

            if(element === array[7]){
                keyLibera = 0
            }

            if(keyLibera === 0){
                nextLvl = 20
            }

            if(element === array[3] && auxlvl > 1){
                auxlvl--
                array[4].innerHTML = `<p id="buttonLevel">Level</p> <p id="buttonNumber">${auxlvl}</p>`
            }else if(element === array[5] && auxlvl < nextLvl){
                auxlvl++
                array[4].innerHTML = `<p id="buttonLevel">Level</p> <p id="buttonNumber">${auxlvl}</p>`
            }
            
            mov = null
            keyNumScreen = 1
            numScreen = null
            keylvl = 1
        }
           
    }else if(!containerButton.classList.contains('menuCalc')){
        array[3].classList.remove('buttonBlueBlackLR')
        array[3].classList.add('buttonN')
        array[4].classList.remove('buttonBlueBlack')
        array[4].classList.add('buttonN')
        array[5].classList.remove('buttonBlueBlackLR')
        array[5].classList.add('buttonN')
        array[7].classList.remove('buttonBlueBlackLR')
        array[7].classList.add('buttonN')
        array[7].style.fontSize = '1.3em'
        keyMenu = 0

        if(clrRed === 0){
            emote.innerHTML = emoteNormal
        }else if(clrRed === 1){
            emote.innerHTML = emoteDerrota
        }
    }
    
}
/* MENU DO JOGO */


/* CÓDIGOS DOS LEVEIS */

//Inicio do Jogo (Level 0)

//Variáveis de controle da função inicioJogo
let simNao = 'não' 
let fraseIndice = 0
//Variáveis de controle da função inicioJogo

function inicioJogo (element1, element2, array) {
    emote.innerHTML = emoteNormal

    //Configurando o campo de texto Screen
    txtScreen.style.textShadow = '0px 0px 2px rgba(69, 74, 78, 50%)'
    txtScreen.style.textAlign = 'center'
    txtScreen.style.fontSize = '40px'
    //txtScreenBack.style.color = 'rgba(69, 74, 78, 0%)'
    //Configurando o campo de texto Screen

    //Configurando o campo de texto Button
    element1.style.fontSize = '1em'
    element2.style.fontSize = '1em'
    element2.classList.remove('buttonRed')
    element2.classList.add('buttonN')
    element2.textContent = 'NÂO'
    //Configurando o campo de texto Button
   
    if(element2 === array && fraseIndice === 8){
        element2.classList.remove('buttonRed')
        element2.classList.add('buttonN')
        fraseIndice = 2
    }else if (element1 === array && fraseIndice === 8){
        simNao = 'sim'
        txtScreen.style.fontSize = '33px'
        levelTxt.textContent = 'Level: 1'
    }else if(fraseIndice === 9){
        lvl = 1
        element1.classList.remove('buttonGreen')
        element1.classList.add('buttonN')
        element2.textContent = ''
    }

    //Elementos TXT que aparece na tela
    txtScreen.textContent = arrayScreen[fraseIndice]
    element1.textContent = arrayButton[fraseIndice]
    //Elementos TXT que aparece na tela

    if(fraseIndice < arrayScreen.length -2 && simNao === 'não'){
        
        if(fraseIndice === 2){
            txtScreen.style.fontSize = '34px'
            goalTxt.style.border =  '3px solid red'
            goalTxt.textContent = 'GOAL: 2'
        }else if( fraseIndice === 4){
            txtScreen.style.fontSize = '34px'
            goalTxt.style.border =  'none'
            moviesTxt.style.border =  '3px solid red'
            moviesTxt.textContent = 'MOVIES: 2'
        } else if(fraseIndice === 5){
            txtScreen.style.fontSize = '25px'
            txtScreen.style.textAlign = 'center'
            element1.style.fontSize = '0.9em'
        }else if(fraseIndice === 6){
            goalTxt.style.border =  'none'
            moviesTxt.style.border =  'none'
            txtScreen.style.fontSize = '25px'
            txtScreen.style.textAlign = 'center'
        }
    }else if(fraseIndice >= 7 && simNao === 'não'){
        element2.classList.remove('buttonN')
        element2.classList.add('buttonRed') 
    }

    fraseIndice = fraseIndice + 1
}
//Inicio do Jogo (Level 0)


//Level 01 do jogo
function nivel1(element, indice, array){
    emote.innerHTML = emoteNormal
    goal = 2
    

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(2, 0)
    }
    //Chamando a função reset

    //Esquema para diminuir o mov
    if(mov === 2 || mov === null){
        mov = 2
    }
    if(array[1] === element && keylvl === 1){
        mov--
    }
    //Esquema para diminuir o mov

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonGreen')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        screen.style.justifyContent = 'center'
        stopLoop = 0
        txtScreen.textContent = 'GANHOU'
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(keylvl === 1){

        stopLoop = 1
        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        array[4].classList.remove('buttonGreen')
        array[4].classList.add('buttonN')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen
    
        //Configurando o campo de texto Button
        array[1].textContent = '+ 1'
        array[1].style.fontSize = '1.2em'
        array[2].textContent = 'CLR'
        //Configurando o campo de texto Button

        //Utilizando a função somar
        if(numScreen === null){
            numScreen = 0
        }

        if(keylvl === 1){
            if(array[1] === element){
                somar(numScreen, 1)
            }
            //Elementos TXT que aparece na tela
            txtScreen.textContent = numScreen
            //Elementos TXT que aparece na tela
        }
        //Utilizando a função somar

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        
        }
    }else if(array[2] === element && keylvl === 0 && array[2].classList.contains('buttonGreen')){
        stopLoop = 1
        lvl = 1.5
    }
}
//Level 01 do jogo

//Level 1.5 do jogo

//Variáveis de controle da função nivelUm5
let passNext = 0
//Variáveis de controle da função nivelUm5

function nivelUm5(element, indice, array){
    emote.innerHTML = emoteNormal

    //Posicionando os Buttons
    array[6].classList.remove('buttonYellow') 
    array[6].classList.add('buttonN') 
    array[1].classList.remove('buttonBlack') 
    array[1].classList.add('buttonN') 
    array[2].classList.remove('buttonGreen') 
    array[2].classList.add('buttonN') 

    array[4].classList.remove('buttonN')
    array[4].classList.add('buttonGreen') 
    //Posicionando os Buttons

    //Configurando o campo de texto Screen
    txtScreen.style.textShadow = '0px 0px 2px rgba(69, 74, 78, 50%)'
    screen.style.justifyContent = 'center'
    txtScreen.style.fontSize = '29px'
    txtScreen.style.textAlign = 'center'
    //Configurando o campo de texto Screen

    //Configurando o campo de texto Button
    array[4].textContent = 'MANDA BRASA!'
    array[4].style.fontSize = '15px'
    //Configurando o campo de texto Button

    //Elementos TXT que aparece na tela
    txtScreen.textContent = 'MUITO BEM, AGORA VAMOS AO NIVEL 2!'
    //Elementos TXT que aparece na tela

    if(element === array[4]){
        lvl = 2    
        mov = null
        keylvl = 1
        keyNumScreen = 0
        if(passNext === 0){
            nextLvl++
            passNext = 1 
        }
    }
}
//Level 1.5 do jogo

//Level 2 do jogo
function nivel2(element, indice, array){
    goal = 8
    

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(3, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
     if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[4].textContent = '+ 3'
        array[4].style.fontSize = '1.2em'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    //Esquema para diminuir o mov
    if(mov === 3 || mov === null){
        mov = 3
    }
    if(keylvl === 1){
        stopLoop = 1
        emote.innerHTML = emoteNormal

        if(array[indice] === element && element.classList.contains('buttonBlack')){
            mov--
        }
        //Esquema para diminuir o mov
    
        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons
    
        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen
    
        //Configurando o campo de texto Button
        array[1].textContent = '+ 2'
        array[2].textContent = 'CLR'
        array[4].textContent = '+ 3'
        array[4].style.fontSize = '1.2em'
        //Configurando o campo de texto Button
    
        
        //Utilizando a função somar
        if(numScreen === null){
            numScreen = 0
        }
    
        //Utilizando a função somar
        if(array[1] === element){
            somar(numScreen, 2)
        }else if(array[4] === element && element.classList.contains('buttonBlack')){
            somar(numScreen, 3)
        
            if(keyNumScreen === 0){
            keyNumScreen = 1
            numScreen = 0
        }
        }
        //Utilizando a função somar
    
        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela
    
        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 2.5
        stopLoop = 1
    }
}
//Level 2 do jogo

//Level 2.5 do jogo

//Variáveis de controle da função nivel2.5
let keyDois5 = 0
let passNext1 = 0
//Variáveis de controle da função nivel2.5

//Texto do nivel 2.5
let arrayDois5 = ['APOSTO QUE CHICLETE E DELICIOSO', 'É SIM', 'TALVEZ UM DIA EU PROVE', 'TALVEZ...']
//Texto do nivel 2.5

function nivelDois5(element, indice, array){

    //Posicionando os Buttons
    for(let i = 0; i < array.length; i++){
        array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
        array[i].classList.add('buttonN')
    }
    array[4].classList.remove('buttonN')
    array[4].classList.add('buttonGreen')
    //Posicionando os Buttons

    //Configurando o campo de texto Screen
    txtScreen.style.textShadow = '0px 0px 2px rgba(69, 74, 78, 50%)'
    txtScreen.style.fontSize = '25px'
    txtScreen.style.textAlign = 'center'
    if(keyDois5 === 0){
        txtScreen.textContent = 'RESOLVENDO PUZZLES COMO CHICLETE ESTOURANDO!'
        //Configurando o campo de texto Screen

        //Configurando o campo de texto Button
        array[4].textContent = 'POP'    
        //Configurando o campo de texto Button
    }
    if(array[4] === element && array[4].textContent === 'POP'){
        txtScreen.textContent = arrayDois5[0]
        array[4].textContent = arrayDois5[1]  
        keyDois5 = 1
    }else if(array[4] === element && array[4].textContent === arrayDois5[1]){
        txtScreen.textContent = arrayDois5[2]
        txtScreen.style.fontSize = '30px'
        array[4].textContent = arrayDois5[3]  
        array[4].style.fontSize = '0.9em'
    }else if(array[4] === element && array[4].textContent === arrayDois5[3]){
        keyDois5 = 0
        lvl = 3   
        mov = null
        keylvl = 1
        keyNumScreen = 0
        if(passNext1 === 0){
            nextLvl++
            passNext1 = 1 
        }
    }
}
//Level 2.5 do jogo

//Level 3 do jogo 
function nivel3(element, indice, array){
    goal = 12


    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(3, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonBlack')
        array[7].textContent = '+ 2'
        array[4].textContent = '+ 1'
        array[4].style.fontSize = '1.3em'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    //Esquema para diminuir o mov
    if(mov === 3 || mov === null){
        mov = 3
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack')){
            mov--
        }
        //Esquema para diminuir o mov

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonBlack')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

        //Configurando o campo de texto Button
        array[1].textContent = 'x 4'
        array[2].textContent = 'CLR'
        array[4].textContent = '+ 1'
        array[4].style.fontSize = '1.3em'
        array[7].textContent = '+ 2'
        //Configurando o campo de texto Button

        if(numScreen === null){
            numScreen = 0
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            multi(numScreen, 4)
        }else if(array[4] === element && element.classList.contains('buttonBlack')){
            somar(numScreen, 1)
        
            if(keyNumScreen === 0){
                keyNumScreen = 1
                numScreen = 0
            }
        }else if(array[7] === element){
            somar(numScreen, 2)
        }
        //Utilizando a funções de operadores
    
        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela
        
        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 3.5
        mov = null
        stopLoop = 1
    }
}
//Level 3 do jogo 

//Level 3.5 do jogo

//Variáveis de controle da função nivel3.5
let keyTres5 = 0
let passNext2 = 0
//Variáveis de controle da função nivel3.5

//Texto do nivel 3.5
let arrayTres5 = ['VOCE E BOM! MUITO BOM MESMO!', 'VOCÊ TAMBÉM', 'ATE PARA UM HUMANO.', 'OK???']
//Texto do nivel 3.5

function nivelTres5(element,indice, array){

    //Posicionando os Buttons
    for(let i = 0; i < array.length; i++){
        array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
        array[i].classList.add('buttonN')
    }
    array[4].classList.remove('buttonN')
    array[4].classList.add('buttonGreen')
    //Posicionando os Buttons

    //Configurando o campo de texto Screen
    txtScreen.style.textShadow = '0px 0px 2px rgba(69, 74, 78, 50%)'
    txtScreen.style.fontSize = '25px'
    txtScreen.style.textAlign = 'center'
    //Configurando o campo de texto Screen

    if(keyTres5 === 0){
        txtScreen.textContent = arrayTres5[0]
        txtScreen.style.fontSize = '30px'
        array[4].textContent = arrayTres5[1]  
        array[4].style.fontSize = '0.9em'    
    }

    if(element === array[4] && array[4].textContent === arrayTres5[1]){
        txtScreen.textContent = arrayTres5[2]
        txtScreen.style.fontSize = '35px'
        array[4].textContent = arrayTres5[3]
        array[4].style.fontSize = '1.2em'    
        keyTres5 = 1
    }else if(element === array[4] && array[4].textContent === arrayTres5[3]){
        keyTres5 = 0
        lvl = 4   
        mov = null
        keylvl = 1
        keyNumScreen = 0
        if(passNext2 === 0){
            nextLvl++
            passNext2 = 1 
        }
    }    
}
//Level 3.5 do jogo

//Level 4 do jogo
function nivel4(element, indice, array){
    goal = 7

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(3, 1)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[4].textContent = '- 2'
        array[4].style.fontSize = '1.3em'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu
    
    if(mov === 3 || mov === null){
        mov = 3
    }
    
    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack')){
            mov--
        }

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

        //Configurando o campo de texto Button
        array[1].textContent = '+ 4'
        array[2].textContent = 'CLR'
        array[4].textContent = '- 2'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button

        if(numScreen === null){
            numScreen = 1
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            somar(numScreen, 4)
        }else if(array[4] === element && element.classList.contains('buttonBlack')){
            menos(numScreen, 2)
        
            if(keyNumScreen === 0){
                keyNumScreen = 1
                numScreen = 1
            }
        }
        //Utilizando a funções de operadores
    
        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }

    }else if(element === array[2] && keylvl === 0){
        lvl = 4.5
        mov = null
        stopLoop = 1
    }
}
//Level 4 do jogo

//Level 4.5 do jogo

//Variáveis de controle da função nivel 4.5
let keyQuatro5 = 0
let passNext3 = 0
let buttonAzul = 1
let keyCampTxt = 0
//Variáveis de controle da função nivel 4.5

//Texto do nivel 4.5
let arrayQuatro5 = ['O PROXIMO PARECE COMPLICADO...', 'SÉRIO?', 'NAO SE PREOCUPE, ESTOU AQUI PARA TE APOIAR!', 'OBRIGADO!','ENCONTREI UM BOTAO ESCONDIDO QUE PODE AJUDAR', 'ONDE?', 'VOU TE MOSTRAR', 'OK', 'ESSE E O BOTAO DE DICAS', 'CARAMBA!', 'SIM, E AINDA HA ALGUMAS CARGAS DEIXADAS', 'LEGAL', 'AO TOCAR, VOCE VERA OS MOVIMENTOS CORRETOS DO INICIO AO FIM', 'UAU!', 'MUITO LOUCO, NE?', 'SIM!', 'NAO HA UMA LINHA DE CODIGO QUE POSSA ME IMPEDIR', 'VERDADE!', 'VA EM FRENTE, EXPERIMENTE.', 'OK']
//Texto do nivel 4.5

function nivelQuatro5(element, indice, array){
    //Posicionando os Buttons
    for(let i = 0; i < array.length; i++){
        array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
        array[i].classList.add('buttonN')
    }
    array[4].classList.remove('buttonN')
    array[4].classList.add('buttonGreen')

    if(buttonAzul === 0){
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        keyCampTxt = 1
    }
    //Posicionando os Buttons

    //Configurando o campo de texto Screen
    if(keyCampTxt === 0){
        txtScreen.style.textShadow = '0px 0px 2px rgba(69, 74, 78, 50%)'
        txtScreen.style.fontSize = '25px'
        txtScreen.style.textAlign = 'center'
        screen.style.justifyContent = 'center'
    }
    //Configurando o campo de texto Screen

    if(keyQuatro5 === 0){
        txtScreen.textContent = arrayQuatro5[0]
        txtScreen.style.fontSize = '30px'
        array[4].textContent = arrayQuatro5[1]  
        array[4].style.fontSize = '0.9em'    
    }

    if(element === array[4] && txtScreen.textContent === arrayQuatro5[0]){
        txtScreen.textContent = arrayQuatro5[2]
        array[4].textContent = arrayQuatro5[3]  
        array[4].style.fontSize = '0.7em'
        keyQuatro5 = 1
    }else if(element === array[4] && txtScreen.textContent === arrayQuatro5[2]){
        txtScreen.textContent = arrayQuatro5[4]
        array[4].textContent = arrayQuatro5[5] 
        array[4].style.fontSize = '0.9em' 
    }else if(element === array[4] && txtScreen.textContent === arrayQuatro5[4]){
        txtScreen.textContent = arrayQuatro5[6]
        txtScreen.style.fontSize = '30px'
        array[4].textContent = arrayQuatro5[7] 
        array[4].style.fontSize = '1.2em' 
    }else if(element === array[4] && txtScreen.textContent === arrayQuatro5[6]){
        buttonAzul = 0
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} 15`
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        txtScreen.textContent = arrayQuatro5[8]
        txtScreen.style.fontSize = '30px'
        array[4].textContent = arrayQuatro5[9] 
        array[4].style.fontSize = '0.7em'
    }else if(element === array[4] && txtScreen.textContent === arrayQuatro5[8]){
        txtScreen.textContent = arrayQuatro5[10]
        array[4].textContent = arrayQuatro5[11] 
        array[4].style.fontSize = '1em'
    }else if(element === array[4] && txtScreen.textContent === arrayQuatro5[10]){
        txtScreen.style.fontSize = '23px'
        txtScreen.textContent = arrayQuatro5[12]
        array[4].textContent = arrayQuatro5[13] 
    }else if(element === array[4] && txtScreen.textContent === arrayQuatro5[12]){
        txtScreen.textContent = arrayQuatro5[14]
        array[4].textContent = arrayQuatro5[15] 
        txtScreen.style.fontSize = '30px'
    }else if(element === array[4] && txtScreen.textContent === arrayQuatro5[14]){
        txtScreen.textContent = arrayQuatro5[16]
        array[4].textContent = arrayQuatro5[17] 
        array[4].style.fontSize = '0.8em'
    }else if(element === array[4] && txtScreen.textContent === arrayQuatro5[16]){
        txtScreen.style.fontSize = '30px'
        txtScreen.textContent = arrayQuatro5[18]
        array[4].textContent = arrayQuatro5[19] 
        array[4].style.fontSize = '1.3em' 
    }else if(element === array[4] && txtScreen.textContent === arrayQuatro5[18]){
        keyQuatro5 = 0
        lvl = 5   
        mov = null
        keylvl = 1
        keyNumScreen = 0
        buttonAzul = 1
        keyCampTxt = 0
        if(passNext3 === 0){
            nextLvl++
            passNext3 = 1 
        }
    }

}
//Level 4.5 do jogo

//Level 5 do jogo

//Variáveis de controle da função nivel 5
let passNext4 = 0
let keyFecharTxtButton = 1
let keyDicas = 0
//Variáveis de controle da função nivel 5

function nivel5(element, indice, array){
    goal = 20


    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(3, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = 'x 4'
        array[4].textContent = '+ 4'
        array[4].style.fontSize = '1.3em'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 3 || mov === null){
        mov = 3
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[4].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[1].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[4].innerHTML = '+ 4<p class="dicas">1,3</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[4].textContent = '+ 4'
            array[1].textContent = 'x 4'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            multi(numScreen, 4)
        }else if(array[4] === element && element.classList.contains('buttonBlack')){
            somar(numScreen, 4)
        
            if(keyNumScreen === 0){
                keyNumScreen = 1
                numScreen = 0
            }
        
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 6 
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1

        if(numDica > 0){
            keyDicas = 0
        }

        if(passNext4 === 0){
            nextLvl++
            passNext4 = 1 
        }  
    }
}
//Level 5 do jogo

//Level 6 do jogo

//Variáveis de controle da função nivel 6
let passNext5 = 0
//Variáveis de controle da função nivel 6


function nivel6(element, indice, array){
    goal = 40


    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(4, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = '+ 2'
        array[4].textContent = 'x 4'
        array[4].style.fontSize = '1.3em'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 4 || mov === null){
        mov = 4
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[4].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[1].innerHTML = '+ 2<p class="dicas">1,3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[4].innerHTML = 'x 4<p class="dicas">2,4</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[4].textContent = 'x 4'
            array[1].textContent = '+ 2'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            somar(numScreen, 2)
        }else if(array[4] === element && element.classList.contains('buttonBlack')){
            multi(numScreen, 4)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 7
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }

        if(passNext5 === 0){
            nextLvl++
            passNext5 = 1 
        }  
    }
}
//Level 6 do jogo

//Level 7 do jogo
function nivel7 (element, indice, array){
    goal = 10


    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(4, 100)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = '+ 3'
        array[4].textContent = '/ 5'
        array[4].style.fontSize = '1.3em'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 4 || mov === null){
        mov = 4
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[4].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[4].innerHTML = ' / 5<p class="dicas">1,2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[1].innerHTML += '<p class="dicas">3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[1].innerHTML = '+ 3<p class="dicas">3,4</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[4].textContent = '/ 5'
            array[1].textContent = '+ 3'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 100
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            somar(numScreen, 3)
        }else if(array[4] === element && element.classList.contains('buttonBlack')){
            divid(numScreen, 5)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 7.5
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1

        if(numDica > 0){
            keyDicas = 0
        }
    }
}
//Level 7 do jogo

//Level 7.5 do jogo

//Variáveis de controle da função nivel 7.5
let keySete5 = 0
let keyCampTxt2 = 0
let buttonOrange = 1
let passNext6 = 0
//Variáveis de controle da função nivel 7.5

//Texto do nivel 7.5
let arraySete5 = ['ESTAMOS MANDANDO VER!!!', 'SIM!', 'ESPERE UM SEGUNDO...', '?', 'EU TENHO ACESSO A UM NOVO BOTAO!', 'OQUE?', 'DESBLOQUEOU QUANDO VOCE VENCEU O NIVEL ANTERIOR!', 'OOOH!', 'ELE DELETA UM NUMERO DO TOTAL!', 'UAU!', 'PREPARADO PARA O PROXIMO NIVEL?', 'SIM!']
//Texto do nivel 7.5

function nivelSete5(element, indice, array){

    //Posicionando os Buttons
    for(let i = 0; i < array.length; i++){
        array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
        array[i].classList.add('buttonN')
    }
    array[4].classList.remove('buttonN')
    array[4].classList.add('buttonGreen')

    if(buttonOrange === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonOrange')
        keyCampTxt2 = 1
    }
    //Posicionando os Buttons

    //Configurando o campo de texto Screen
    if(keyCampTxt2 === 0){
        txtScreen.style.textShadow = '0px 0px 2px rgba(69, 74, 78, 50%)'
        txtScreen.style.fontSize = '25px'
        txtScreen.style.textAlign = 'center'
        screen.style.justifyContent = 'center'
    }
    //Configurando o campo de texto Screen

    if(keySete5 === 0){
        txtScreen.textContent = arraySete5[0]
        array[4].textContent = arraySete5[1]
    }

    if(element === array[4] && arraySete5[0] === txtScreen.textContent){
        txtScreen.textContent = arraySete5[2]
        array[4].textContent = arraySete5[3]
        keySete5 = 1
    }else if(element === array[4] && arraySete5[2] === txtScreen.textContent){
        txtScreen.textContent = arraySete5[4]
        array[4].textContent = arraySete5[5]
        array[4].style.fontSize = '1em'
    }else if(element === array[4] && arraySete5[4] === txtScreen.textContent){
        buttonOrange = 0
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonOrange')
        array[1].textContent = '<<'
        txtScreen.textContent = arraySete5[6]
        array[4].textContent = arraySete5[7]
    }else if(element === array[4] && arraySete5[6] === txtScreen.textContent){
        txtScreen.textContent = arraySete5[8]
        array[4].textContent = arraySete5[9]
    }else if(element === array[4] && arraySete5[8] === txtScreen.textContent){
        txtScreen.textContent = arraySete5[10]
        array[4].textContent = arraySete5[11]
    }else if(element === array[4] && arraySete5[10] === txtScreen.textContent){
        keySete5 = 0
        lvl = 8   
        mov = null
        keylvl = 1
        keyNumScreen = 0
        buttonOrange = 1
        keyCampTxt2 = 0
        if(passNext6 === 0){
            nextLvl++
            passNext6 = 1 
        }
    }
}
//Level 7.5 do jogo

//Level 8 do jogo

//Variáveis de controle da função nivel 8
let passNext7 = 0
//Variáveis de controle da função nivel 8
function nivel8(element, indice, array){
    goal = 4


    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(3, 4321)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[5].textContent = '<<'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 3 || mov === null){
        mov = 3
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonOrange')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[5].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[5].innerHTML = '<< <p class="dicas">1,2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[5].innerHTML = '<< <p class="dicas">1,2,3</p>'
                    keyDicas = 100
                }


                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[5].textContent = '<<'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 4321

        }

        //Utilizando a funções de operadores
        if(array[5] === element){
            removeNum(numScreen)
            
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 9
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }
        if(passNext7 === 0){
            nextLvl++
            passNext7 = 1 
        }
    }
}
//Level 8 do jogo

//Level 9 do jogo

//Variáveis de controle da função nivel 9
let passNext8 = 0
//Variáveis de controle da função nivel 9

function nivel9(element, indice, array){
    goal = 4


    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(3, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = '+ 8'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].style.fontSize = '1.3em'
        array[4].textContent = 'x 5'
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[5].textContent = '<<'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 3 || mov === null){
        mov = 3
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element &&  element.classList.contains('buttonBlack') ||element.classList.contains('buttonOrange')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[4].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[5].innerHTML += '<p class="dicas">3</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '+ 8'
            array[4].textContent = 'x 5'
            array[5].textContent = '<<'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0

        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            somar(numScreen, 8)
        }else if(array[4] === element){
            multi(numScreen, 5)
        }else if(array[5] === element){
            removeNum(numScreen)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 10
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }
        if(passNext8 === 0){
            nextLvl++
            passNext8 = 1 
        }
    }
}
//Level 9 do jogo

//Level 10 do jogo

//Variáveis de controle da função nivel 10
let passNext9 = 0
//Variáveis de controle da função nivel 10

function nivel10(element, indice, array){
    goal = 9

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(4, 50)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = '/ 5'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].style.fontSize = '1.3em'
        array[4].textContent = 'x 3'
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[5].textContent = '<<'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 4 || mov === null){
        mov = 4
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element &&  element.classList.contains('buttonBlack') ||element.classList.contains('buttonOrange')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[4].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[1].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[4].innerHTML = 'x 3<p class="dicas">1,3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[5].innerHTML += '<p class="dicas">4</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '/ 5'
            array[4].textContent = 'x 3'
            array[5].textContent = '<<'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 50

        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            divid(numScreen, 5)
        }else if(array[4] === element){
            multi(numScreen, 3)
        }else if(array[5] === element){
            removeNum(numScreen)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 11
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }
        if(passNext9 === 0){
            nextLvl++
            passNext9 = 1 
        }
    }
}
//Level 10 do jogo

//Level 11 do jogo

//Variáveis de controle da função nivel 11
let passNext10 = 0
//Variáveis de controle da função nivel 11

function nivel11(element, indice, array){
    goal = 100

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(3, 99)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = '- 8'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].style.fontSize = '1.3em'
        array[4].textContent = 'x 11'
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[5].textContent = '<<'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 3 || mov === null){
        mov = 3
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element &&  element.classList.contains('buttonBlack') ||element.classList.contains('buttonOrange')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[4].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[5].innerHTML += '<p class="dicas">3</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '- 8'
            array[4].textContent = 'x 11'
            array[5].textContent = '<<'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 99

        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            menos(numScreen, 8)
        }else if(array[4] === element){
            multi(numScreen, 11)
        }else if(array[5] === element){
            removeNum(numScreen)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 12
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }

        if(passNext10 === 0){
            nextLvl++
            passNext10 = 1 
        }
    }
}
//Level 11 do jogo

//Level 12 do jogo

//Variáveis de controle da função nivel 12
let passNext11 = 0
//Variáveis de controle da função nivel 12

function nivel12(element, indice, array){
    goal = 404

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(5, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = '+ 8'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].style.fontSize = '1.3em'
        array[4].textContent = 'x 10'
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonBlack')
        array[7].textContent = '/ 2'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 5 || mov === null){
        mov = 5
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack') ||element.classList.contains('buttonOrange')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[4].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[4].innerHTML = 'x 10<p class="dicas">2,3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[1].innerHTML = '+ 8<p class="dicas">1,4</p>'
                    keyDicas = 4
                }else if(keyDicas === 4){
                    array[7].innerHTML = '/ 2<p class="dicas">5</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonBlack')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '+ 8'
            array[4].textContent = 'x 10'
            array[7].textContent = '/ 2'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0

        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            somar(numScreen, 8)
        }else if(array[4] === element){
            multi(numScreen, 10)
        }else if(array[7] === element){
            divid(numScreen, 2)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 13
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }

        if(passNext11 === 0){
            nextLvl++
            passNext11 = 1 
        }
    }
}
//Level 12 do jogo

//Level 13 do jogo

//Variáveis de controle da função nivel 13
let passNext12 = 0
//Variáveis de controle da função nivel 13

function nivel13(element, indice, array){
    goal = 23

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(4, 171)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = 'x 2'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].style.fontSize = '1.3em'
        array[4].textContent = '- 9'
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[5].textContent = '<<'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 4 || mov === null){
        mov = 4
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack') ||element.classList.contains('buttonOrange')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[4].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[1].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[5].innerHTML += '<p class="dicas">3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[4].innerHTML = '- 9<p class="dicas">1,4</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = 'x 2'
            array[4].textContent = '- 9'
            array[5].textContent = '<<'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 171

        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            multi(numScreen, 2)
        }else if(array[4] === element){
            menos(numScreen, 9)
        }else if(array[5] === element){
            removeNum(numScreen)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 14
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }

        if(passNext12 === 0){
            nextLvl++
            passNext12 = 1 
        }
    }
}
//Level 13 do jogo

//Level 14 do jogo
function nivel14(element, indice, array){
    goal = 21

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(5, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = '+ 5'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].style.fontSize = '1.3em'
        array[4].textContent = 'x 3'
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[5].textContent = '<<'
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonBlack')
        array[7].textContent = 'x 5'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 5 || mov === null){
        mov = 5
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack') ||element.classList.contains('buttonOrange')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[4].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[7].innerHTML += '<p class="dicas">3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[5].innerHTML += '<p class="dicas">4</p>'
                    keyDicas = 4
                }
                else if(keyDicas === 4){
                    array[4].innerHTML = 'x 3<p class="dicas">2,5</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonBlack')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '+ 5'
            array[4].textContent = 'x 3'
            array[5].textContent = '<<'
            array[7].textContent = 'x 5'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            somar(numScreen, 5)
        }else if(array[4] === element){
            multi(numScreen, 3)
        }else if(array[5] === element){
            removeNum(numScreen)
        }else if(array[7] === element){
            multi(numScreen, 5)
        }    
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 14.5
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }
    }
}
//Level 14 do jogo


//Level 14.5 do jogo
//Variáveis de controle da função nivel 14.5
let keyQuatorze5 = 0
let keyCampTxt3 = 0
let buttonPurple = 1
let passNext13 = 0
//Variáveis de controle da função nivel 14.5

//Texto do nivel 14.5
let arrayQuatorze5 = ['ACONTECEU DE NOVO!', 'OQUE?', 'UM NOVO BOTAO FOI DESBLOQUEADO', 'LEGAL!', 'ELE INSERE UM NUMERO NO TOTAL.', 'OK', 'VAMOS EXPERIMENTAR.', 'VAMOS!']
//Texto do nivel 14.5

function nivelQuatorze5(element, indice, array){

    //Posicionando os Buttons
    for(let i = 0; i < array.length; i++){
        array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
        array[i].classList.add('buttonN')
    }
    array[4].classList.remove('buttonN')
    array[4].classList.add('buttonGreen')

    if(buttonPurple === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        keyCampTxt3 = 1
    }
    //Posicionando os Buttons

    //Configurando o campo de texto Screen
    if(keyCampTxt3 === 0){
        txtScreen.style.textShadow = '0px 0px 2px rgba(69, 74, 78, 50%)'
        txtScreen.style.fontSize = '25px'
        txtScreen.style.textAlign = 'center'
        screen.style.justifyContent = 'center'
    }
    //Configurando o campo de texto Screen

    if(keyQuatorze5 === 0){
        txtScreen.textContent = arrayQuatorze5[0]
        array[4].textContent = arrayQuatorze5[1]
        array[4].style.fontSize = '1em'
    }

    if(element === array[4] && arrayQuatorze5[0] === txtScreen.textContent){
        buttonPurple = 0
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[1].textContent = '2'
        txtScreen.textContent = arrayQuatorze5[2]
        array[4].textContent = arrayQuatorze5[3]
        keyQuatorze5 = 1
    }else if(element === array[4] && arrayQuatorze5[2] === txtScreen.textContent){
        txtScreen.textContent = arrayQuatorze5[4]
        array[4].textContent = arrayQuatorze5[5]
        array[4].style.fontSize = '1em'
    }else if(element === array[4] && arrayQuatorze5[4] === txtScreen.textContent){
        txtScreen.textContent = arrayQuatorze5[6]
        array[4].textContent = arrayQuatorze5[7]
    }else if(element === array[4] && arrayQuatorze5[6] === txtScreen.textContent){
        keyQuatorze5 = 0
        lvl = 15   
        mov = null
        keylvl = 1
        keyNumScreen = 0
        buttonPurple = 1
        keyCampTxt3 = 0
        if(passNext13 === 0){
            nextLvl++
            passNext13 = 1 
        }
    }
}
//Level 14.5 do jogo

//Level 15 do jogo

//Variáveis de controle da função nivel 15
let passNext14 = 0
//Variáveis de controle da função nivel 15

function nivel15(element, indice, array){
    goal = 11

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(2, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[1].textContent = '1'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 2 || mov === null){
        mov = 2
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack') || element.classList.contains('buttonOrange') ||  element.classList.contains('buttonPurple')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                keyFecharTxtButton = 0

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[1].innerHTML = '1 <p class="dicas">1,2</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
           
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '1'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            addNumber(numScreen, '1')
        } 
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteNormal
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 16
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }

        if(passNext14 === 0){
            nextLvl++
            passNext14 = 1 
        }
    }
}
//Level 15 do jogo

//Level 16 do jogo

//Variáveis de controle da função nivel 16
let passNext15 = 0
//Variáveis de controle da função nivel 16

function nivel16(element, indice, array){
    goal = 44

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(3, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[1].textContent = '2'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].textContent = 'x 2'
        array[4].style.fontSize = '1.3em'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 3 || mov === null){
        mov = 3
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack') || element.classList.contains('buttonOrange') ||  element.classList.contains('buttonPurple')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            keyFecharTxtButton = 0

            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[1].innerHTML = '2 <p class="dicas">1,2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[4].innerHTML += '<p class="dicas">3</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '2'
            array[4].textContent = 'x 2'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            addNumber(numScreen, '2')
        }else if(array[4] === element){
            multi(numScreen, 2)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 17
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }

        if(passNext15 === 0){
            nextLvl++
            passNext15 = 1 
        }
    }
}
//Level 16 do jogo

//Level 17 do jogo

//Variáveis de controle da função nivel 17
let passNext16 = 0
//Variáveis de controle da função nivel 17

function nivel17(element, indice, array){
    goal = 210

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(5, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[1].textContent = '- 5'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].textContent = '+ 5'
        array[4].style.fontSize = '1.3em'
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonPurple')
        array[5].textContent = '2'
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonPurple')
        array[7].textContent = '5'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 5 || mov === null){
        mov = 5
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack') || element.classList.contains('buttonOrange') ||  element.classList.contains('buttonPurple')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            keyFecharTxtButton = 0

            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                if(keyDicas === 0){
                    array[5].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[7].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[1].innerHTML += '<p class="dicas">3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[7].innerHTML = '5 <p class="dicas">2,4</p>'
                    keyDicas = 4
                }else if(keyDicas === 4){
                    array[4].innerHTML += '<p class="dicas">5</p>'
                    keyDicas = 100
                }


                if(numDica === 0){
                    keyDicas = 1000
                }
            }
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonBlack')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonPurple')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonPurple')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '- 5'
            array[4].textContent = '+ 5'
            array[5].textContent = '2'
            array[7].textContent = '5'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            menos(numScreen, 5)
        }else if(array[4] === element){
            somar(numScreen, 5)
        }else if(array[5] === element){
            addNumber(numScreen, '2')
        }else if(array[7] === element){
            addNumber(numScreen, '5')
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 18
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }
        if(passNext16 === 0){
            nextLvl++
            passNext16 = 1 
        }
    }
}
//Level 17 do jogo



//Level 18 do jogo

//Variáveis de controle da função nivel 18
let passNext17 = 0
//Variáveis de controle da função nivel 18

function nivel18(element, indice, array){
    goal = 2023

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(4, 40)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[1].textContent = '0'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].textContent = '+ 4'
        array[4].style.fontSize = '1.3em'
        array[3].classList.remove('buttonN')
        array[3].classList.add('buttonPurple')
        array[3].textContent = '6'
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonBlack')
        array[7].textContent = '/ 2'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 4 || mov === null){
        mov = 4
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack') || element.classList.contains('buttonOrange') ||  element.classList.contains('buttonPurple')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            keyFecharTxtButton = 0

            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[4].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[3].innerHTML += '<p class="dicas">3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[7].innerHTML += '<p class="dicas">4</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[3].classList.remove('buttonN')
        array[3].classList.add('buttonPurple')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        array[7].classList.remove('buttonN')
        array[7].classList.add('buttonBlack')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '0'
            array[4].textContent = '+ 4'
            array[3].textContent = '6'
            array[7].textContent = '/ 2'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 40
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            addNumber(numScreen, '0')
        }else if(array[4] === element){
            somar(numScreen, 4)
        }else if(array[3] === element){
            addNumber(numScreen, '6')
        }else if(array[7] === element){
            divid(numScreen, 2)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 19
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }

        if(passNext17 === 0){
            nextLvl++
            passNext17 = 1 
        }
    }
}
//Level 18 do jogo

//Level 19 do jogo

//Variáveis de controle da função nivel 18
let passNext18 = 0
//Variáveis de controle da função nivel 18

function nivel19(element, indice, array){
    goal = 11

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(4, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[1].textContent = '12'
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[5].textContent = '<<'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 4 || mov === null){
        mov = 4
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack') || element.classList.contains('buttonOrange') ||  element.classList.contains('buttonPurple')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            keyFecharTxtButton = 0

            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[5].innerHTML += '<p class="dicas">2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[1].innerHTML = '12 <p class="dicas">1,3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[5].innerHTML = '<< <p class="dicas">2,4</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '12'
            array[5].textContent = '<<'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            addNumber(numScreen, '12')
        }else if(array[5] === element){
            removeNum(numScreen)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        lvl = 20
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }

        if(passNext18 === 0){
            nextLvl++
            passNext18 = 1 
        }
    }
}
//Level 19 do jogo

//Level 20 do jogo
function nivel20(element, indice, array){
    goal = 102

    //Chamando a função reset
    if(array[2] === element && array[2].classList.contains('buttonRed')){
        reset(4, 0)

        if(keylvl === 0){
            keylvl = 1
        }
    }
    //Chamando a função reset

    //Restaurando os elementos que foram removidos pelo Menu
    if(array[6] === element && !array[6].classList.contains('menuCalc') && keylvl === 0){
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[1].textContent = '10'
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[4].textContent = '+ 1'
        array[4].style.fontSize = '1.3em'
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[5].textContent = '<<'
        array[2].classList.remove('buttonN')
        if(clrRed === 0){
            array[2].classList.add('buttonGreen')
            txtScreen.textContent = 'GANHOU'
            screen.style.justifyContent = 'center'
        }else if(clrRed === 1){
            array[2].classList.add('buttonRed')
            txtScreen.textContent = numScreen
            screen.style.justifyContent = 'end'
        }
        stopLoop = 0
    }
    //Restaurando os elementos que foram removidos pelo Menu

    if(mov === 4 || mov === null){
        mov = 4
    }

    if(keylvl === 1){
        emote.innerHTML = emoteNormal
        stopLoop = 1

        if(array[indice] === element && element.classList.contains('buttonBlack') || element.classList.contains('buttonOrange') ||  element.classList.contains('buttonPurple')){
            mov--
        }

        //Funcionaldade do botão dicas
        if(array[0] === element && element.classList.contains('buttonBlue')){
            keyFecharTxtButton = 0

            if(keyDicas !== 1000){
                 if(keyDicas !== 100){
                    numDica--
                }

                if(keyDicas === 0){
                    array[1].innerHTML += '<p class="dicas">1</p>'
                    keyDicas = 1
                }else if(keyDicas === 1){
                    array[1].innerHTML = '10 <p class="dicas">1,2</p>'
                    keyDicas = 2
                }else if(keyDicas === 2){
                    array[5].innerHTML += '<p class="dicas">3</p>'
                    keyDicas = 3
                }else if(keyDicas === 3){
                    array[4].innerHTML += '<p class="dicas">4</p>'
                    keyDicas = 100
                }

                if(numDica === 0){
                    keyDicas = 1000
                }
            }
        }
        //Funcionaldade do botão dicas

        //Posicionando os Buttons
        for(let i = 0; i < array.length; i++){
            array[i].classList.remove('buttonBlue', 'buttonBlack', 'buttonRed', 'buttonGreen', 'buttonOrange', 'buttonPurple')
            array[i].classList.add('buttonN')
        }
        array[0].classList.remove('buttonN')
        array[0].classList.add('buttonBlue')
        array[1].classList.remove('buttonN')
        array[1].classList.add('buttonPurple')
        array[2].classList.remove('buttonN')
        array[2].classList.add('buttonRed')
        array[4].classList.remove('buttonN')
        array[4].classList.add('buttonBlack')
        array[5].classList.remove('buttonN')
        array[5].classList.add('buttonOrange')
        array[6].classList.remove('buttonN')
        array[6].classList.add('buttonYellow')
        //Posicionando os Buttons

        //Configurando o campo de texto Screen
        txtScreen.style.textShadow = '1.5px 1.5px 2px rgba(69, 74, 78, 50%)'
        screen.style.justifyContent = 'end'
        txtScreen.style.fontSize = '55px'
        //txtScreenBack.style.color = 'rgba(69, 74, 78, 10%)'
        levelTxt.textContent = `Level: ${lvl}` 
        moviesTxt.textContent = `MOVIES: ${mov}` 
        goalTxt.textContent = `GOAL: ${goal}`
        //Configurando o campo de texto Screen

       
        //Configurando o campo de texto Button
        if(keyFecharTxtButton === 1){
            array[1].textContent = '10'
            array[4].textContent = '+ 1'
            array[5].textContent = '<<'
        }
        array[0].style.fontSize = '0.9em'
        array[0].innerHTML = `${svgDica} ${numDica}`
        array[2].textContent = 'CLR'
        array[4].style.fontSize = '1.3em'
        //Configurando o campo de texto Button
      

        if(numScreen === null){
            numScreen = 0
        }

        //Utilizando a funções de operadores
        if(array[1] === element){
            addNumber(numScreen, '10')
        }else if(array[4] === element){
            somar(numScreen, 1)
        }else if(array[5] === element){
            removeNum(numScreen)
        }
        //Utilizando a funções de operadores

        //Elementos TXT que aparece na tela
        txtScreen.textContent = numScreen
        //Elementos TXT que aparece na tela

        if(numScreen === goal){
            keylvl = 0
            array[2].classList.remove('buttonRed')
            array[2].classList.add('buttonGreen')
            array[2].textContent = 'OK'
            clrRed = 0
            keyLoop = 0
            stopLoop = 0
            txtLoop()
        }else if(mov === 0 && goal !== numScreen){
            emote.innerHTML = emoteDerrota
            keylvl = 0
            clrRed = 1
        }
    }else if(element === array[2] && keylvl === 0){
        screen.style.justifyContent = 'center'
        txtScreen.style.textAlign = 'center'
        txtScreen.style.fontSize = '30px'
        txtScreen.style.textShadow = '0px 0px 2px rgba(69, 74, 78, 50%)'
        txtScreen.textContent = 'OBRIGADO POR JOGAR!'
        lvl = 20
        mov = null
        keylvl = 1
        numScreen = null
        stopLoop = 1
        keyFecharTxtButton = 1
        if(numDica > 0){
            keyDicas = 0
        }
    }
}
//Level 20 do jogo


/* CÓDIGOS DOS LEVEIS */


/* FUNÇÕES DOS CALCULOS/OPERADORES ESPECIAIS E FUNÇÕES GERAIS*/

function somar (numero, numero2){
    return numScreen = numero + numero2
}

function menos(numero, numero2){
    return numScreen = numero - numero2
}

function multi(numero, numero2){
    return numScreen = numero * numero2 
}

function divid(numero, numero2){
    return numScreen = numero / numero2 
}

function removeNum(numero){
    return numScreen = Number(String(numero).slice(0, -1));

}
function addNumber(numero, numero2){
    return numScreen = Number(String(numero += numero2))
}

//FUNÇÂO GERAL

//função reset nivel
function reset(movies, tela){
    mov = movies
    numScreen = tela
}
//função reset nivel

//função  de final do level
function txtLoop(){
    let textLoop = ['GANHOU', goal]

    if(stopLoop === 1){
        return;
    }

    setTimeout(()=>{
        if(stopLoop === 0){
            txtScreen.textContent = textLoop[0]
            screen.style.justifyContent = 'center'
            
        }
        setTimeout(()=>{ 
            if(stopLoop === 0){
                txtScreen.textContent = textLoop[1]
                screen.style.justifyContent = 'end'
                
                txtLoop()
            }  
        }, 900)
    }, 900)  
}
//função  de final do level

//FUNÇÂO GERAL

/* FUNÇÕES DOS CALCULOS E OPERADORES ESPECIAIS */