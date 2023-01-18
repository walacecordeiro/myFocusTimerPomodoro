const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

let minutes
const minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

function cowntDown(){
    setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)

        if (seconds <= 0){
            seconds = 60
        }
        
        secondsDisplay.textContent = seconds - 1

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

function timer(){
    --secondsDisplay
    console.log(secondsDisplay)
}

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
    minutesDisplay.textContent = minutes
})
