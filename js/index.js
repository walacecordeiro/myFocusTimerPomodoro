import resetControls from "./controls.js"
import {cowntDown, resetTimer} from "./timer.js"


const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')


const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function play(){
    btnPlay.classList.add('hide', 'effects')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
    
    cowntDown()
}

function pause(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')

    clearTimeout(timerTimeOut)
}

function setTime(){
    let newMinutes = prompt('Quantos minutos?')

    if(!newMinutes){
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
}

btnPlay.addEventListener('click', () => {
    play()
})

addEventListener('keypress', function (event){
    if(event.key === 'Enter' && btnPlay.classList == ('play')){
        event.preventDefault()
        play()
    } else if(event.key === 'Enter' && btnPause.classList == ('pause effects')){
        pause()
    } else if(event.key === 'Enter'){
        event.preventDefault()
        play()
    }

})

btnPause.addEventListener('click', () => {
    pause()
})

btnStop.addEventListener('click', () => {
   resetControls()
   resetTimer()
})

btnSet.addEventListener('click', () => {
    setTime()
})

document.onkeydown = function (event){
    if(event.key === 'Escape'){
        resetControls()
        resetTimer()
        setTime()
    }
}