// import Controls from "./controls"

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function cowntDown() {
        timerTimeOut = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds == 0

            updateDisplay(minutes, 0)

            if (isFinished) {
                resetControls()
                updateDisplay()
                return
            }

            if (seconds <= 0) {
                seconds = 60

                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            cowntDown()
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function moreFiveMinutes() {
        let currentMinutes = Number(minutesDisplay.textContent)
        let currentSeconds = Number(secondsDisplay.textContent)

        currentMinutes += 5
        updateDisplay(currentMinutes, currentSeconds)
    }

    function minusFiveMinutes() {
        let currentMinutes = Number(minutesDisplay.textContent)
        let currentSeconds = Number(secondsDisplay.textContent)

        currentMinutes -= 5
        updateDisplay(currentMinutes, currentSeconds)

        if (currentMinutes <= 0) {
            alert(`🔴Não é possível tirar 5 minutos

➡ seu cronômetro será resetado!`)
            reset()
            resetControls()
            updateDisplay()
        }
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        cowntDown,
        reset,
        updateDisplay,
        updateMinutes,
        moreFiveMinutes,
        minusFiveMinutes,
        hold
    }
}