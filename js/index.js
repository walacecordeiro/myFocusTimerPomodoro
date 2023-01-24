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
    const fillSoundIcone = document.getElementsByClassName('fill').item(0)
    forestBtn.classList.toggle(`activeSoundBg`)
    fillSoundIcone.classList.toggle(`activeSoundFill`)
    
    if (forestBtn.classList.contains('activeSoundBg')){
        sounds.forestBtnAudio.play()
    } else {
        sounds.forestBtnAudio.pause()
    }
    
    forestBtn.blur()
})

rainBtn.addEventListener('click', () => {
    const fillSoundIcone = document.getElementsByClassName('fill').item(1)
    rainBtn.classList.toggle(`activeSoundBg`)
    fillSoundIcone.classList.toggle(`activeSoundFill`)
    
    if (rainBtn.classList.contains('activeSoundBg')){
        sounds.rainBtnAudio.play()
    } else {
        sounds.rainBtnAudio.pause()
    }

    rainBtn.blur()
})

coffeeShopBtn.addEventListener('click', () => {
    const fillSoundIcone = document.getElementsByClassName('fill').item(2)
    coffeeShopBtn.classList.toggle(`activeSoundBg`)
    fillSoundIcone.classList.toggle(`activeSoundFill`)
    
    if (coffeeShopBtn.classList.contains('activeSoundBg')){
        sounds.coffeeShopBtnAudio.play()
    } else {
        sounds.coffeeShopBtnAudio.pause()
    }

    coffeeShopBtn.blur()
})

bonfireBtn.addEventListener('click', () => {
    const fillSoundIcone = document.getElementsByClassName('fill').item(3)
    bonfireBtn.classList.toggle(`activeSoundBg`)
    fillSoundIcone.classList.toggle(`activeSoundFill`)
    
    if (bonfireBtn.classList.contains('activeSoundBg')){
        sounds.bonfireBtnAudio.play()
    } else {
        sounds.bonfireBtnAudio.pause()
    }
    bonfireBtn.blur()
})