import { elements } from "./elements.js"
import Sounds from "./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"

//  ELEMENTS
const {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    fiveMoreMinutesBtn,
    minusFiveMinutesBtn,

    minutesDisplay,
    secondsDisplay,

    forestBtn,
    rainBtn,
    coffeeShopBtn,
    bonfireBtn
} = elements

//  SOUNDS
const sounds = Sounds()

//  CONTROLS
const controls = Controls({
    btnPlay,
    btnPause,
    btnSet,
    btnStop
})

//  TIMER
const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})



//  EVENTS
btnPlay.addEventListener('click', () => {
    controls.play()
    timer.cowntDown()
    sounds.soundWhenPressingButton()
})

addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && btnPlay.classList == ('play')) {
        event.preventDefault()
        btnPlay.click()
    } else if (event.key === 'Enter' && btnPause.classList == ('pause effects')) {
        btnPause.click()
    } else if (event.key === 'Enter') {
        event.preventDefault()
        btnPlay.click()
    }
})

btnPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sounds.soundWhenPressingButton()
})

btnStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
    sounds.soundWhenPressingButton()
})

btnSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    sounds.soundWhenPressingButton()
})

document.onkeydown = function (event) {
    if (event.key === 'Escape') {
        timer.reset()
        controls.reset()
        timer.updateDisplay()
        btnSet.click()
    }
}

fiveMoreMinutesBtn.addEventListener('click', () => {
    timer.moreFiveMinutes()
    sounds.soundWhenPressingButton()
    fiveMoreMinutesBtn.blur()
})

minusFiveMinutesBtn.addEventListener('click', () => {
    timer.minusFiveMinutes()
    sounds.soundWhenPressingButton()
    minusFiveMinutesBtn.blur()
})

forestBtn.addEventListener('click', () => {
    const fillSoundIcone = document.getElementsByClassName('fill')[0]
    fillSoundIcone.classList.toggle(`activeSoundFill`)
    forestBtn.classList.toggle(`activeSoundBg`)
    
    if (forestBtn.classList.contains('activeSoundBg')) {
        sounds.bgAudio[0].play()
    } else {
        sounds.bgAudio[0].pause()
    }
   
    forestBtn.blur()
})


rainBtn.addEventListener('click', () => {
    const fillSoundIcone = document.getElementsByClassName('fill')[1]
    rainBtn.classList.toggle(`activeSoundBg`)
    fillSoundIcone.classList.toggle(`activeSoundFill`)
    
    if (rainBtn.classList.contains('activeSoundBg')) {
        sounds.bgAudio[1].play()
    } else {
        sounds.bgAudio[1].pause()
    }
    
    rainBtn.blur()
})

coffeeShopBtn.addEventListener('click', () => {
    const fillSoundIcone = document.getElementsByClassName('fill')[2]
    coffeeShopBtn.classList.toggle(`activeSoundBg`)
    fillSoundIcone.classList.toggle(`activeSoundFill`)

    if (coffeeShopBtn.classList.contains('activeSoundBg')) {
        sounds.bgAudio[2].play()
    } else {
        sounds.bgAudio[2].pause()
    }

    coffeeShopBtn.blur()
})

bonfireBtn.addEventListener('click', () => {
    const fillSoundIcone = document.getElementsByClassName('fill')[3]
    bonfireBtn.classList.toggle(`activeSoundBg`)
    fillSoundIcone.classList.toggle(`activeSoundFill`)

    if (bonfireBtn.classList.contains('activeSoundBg')) {
        sounds.bgAudio[3].play()
    } else {
        sounds.bgAudio[3].pause()
    }

    bonfireBtn.blur()
})