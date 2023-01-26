import {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,

    fiveMoreMinutesBtn,
    minusFiveMinutesBtn,

    forestBtn,
    forestBtnOn,
    rainBtn,
    rainBtnOn,
    coffeeShopBtn,
    coffeeShopBtnOn,
    bonfireBtn,
    bonfireBtnOn,

    btnLightMode,
    btnDarkMode
} from "./elements.js"

export default function ({controls, timer, sounds}) {

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
        forestBtn.classList.add(`hide`)
        forestBtnOn.classList.remove(`hide`)

        sounds.bgAudio[0].play()

        forestBtn.blur()
    })

    forestBtnOn.addEventListener('click', () => {
        forestBtnOn.classList.add(`hide`)
        forestBtn.classList.remove(`hide`)

        sounds.bgAudio[0].pause()

        forestBtn.blur()
    })

    rainBtn.addEventListener('click', () => {
        rainBtn.classList.add(`hide`)
        rainBtnOn.classList.remove(`hide`)

        sounds.bgAudio[1].play()

        rainBtn.blur()
    })

    rainBtnOn.addEventListener('click', () => {
        rainBtnOn.classList.add(`hide`)
        rainBtn.classList.remove(`hide`)

        sounds.bgAudio[1].pause()

        rainBtnOn.blur()
    })

    coffeeShopBtn.addEventListener('click', () => {
        coffeeShopBtn.classList.add(`hide`)
        coffeeShopBtnOn.classList.remove(`hide`)

        sounds.bgAudio[2].play()

        coffeeShopBtn.blur()
    })

    coffeeShopBtnOn.addEventListener('click', () => {
        coffeeShopBtnOn.classList.add(`hide`)
        coffeeShopBtn.classList.remove(`hide`)

        sounds.bgAudio[2].pause()

        coffeeShopBtnOn.blur()
    })

    bonfireBtn.addEventListener('click', () => {
        bonfireBtn.classList.add(`hide`)
        bonfireBtnOn.classList.remove(`hide`)

        sounds.bgAudio[3].play()

        bonfireBtn.blur()
    })

    bonfireBtnOn.addEventListener('click', () => {
        bonfireBtnOn.classList.add(`hide`)
        bonfireBtn.classList.remove(`hide`)

        sounds.bgAudio[3].pause()

        bonfireBtnOn.blur()
    })

    btnLightMode.addEventListener('click', () => {
        controls.mode()
    })
    
    btnDarkMode.addEventListener('click', () => {
        controls.mode()
    })

}