const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function cowntDown(){
    setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        
        // secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

        if(minutes <= 0 && seconds == 0){
            btnPause.classList.add('hide')
            btnPlay.classList.remove('hide')
            btnStop.classList.add('hide')
            btnSet.classList.remove('hide')
            btnSet.classList.add('effects')

            return
        }

        if (seconds <= 0){
            seconds = 5

            minutesDisplay.textContent = String(minutes -1).padStart(2, '0')
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

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
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')
    btnSet.classList.add('effects')
})

btnSet.addEventListener('click', () => {
    minutes = prompt('Quantos minutos?')
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
})
