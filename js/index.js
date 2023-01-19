const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

let timerTimeOut

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)

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

function resetControls(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')
    btnSet.classList.add('effects')    
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

function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function cowntDown(){
    timerTimeOut = setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        
        updateTimerDisplay(minutes, 0)
        
        if(minutes <= 0 && seconds == 0){
            resetControls()
            return
        }
        
        if (seconds <= 0){
            seconds = 2
            
            --minutes
        }
        
        updateTimerDisplay(minutes, String(seconds - 1))
        
        cowntDown()
    }, 1000)
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
