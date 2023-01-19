const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function resetControls(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')
    btnSet.classList.add('effects')    
}

function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function cowntDown(){
    setTimeout(() => {
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
    btnPlay.classList.add('hide', 'effects')
    btnPause.classList.remove('hide')
    btnSet.classList.add('hide')
    btnStop.classList.remove('hide')
    
    cowntDown()
})

btnPause.addEventListener('click', () => {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
})

btnStop.addEventListener('click', () => {
   resetControls()
})

btnSet.addEventListener('click', () => {
    minutes = prompt('Quantos minutos?')
    updateTimerDisplay(minutes, 0)
})
