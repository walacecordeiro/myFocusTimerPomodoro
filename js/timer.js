export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes || minutes
        seconds = seconds || 0
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

            updateDisplay(minutes, 0)

            if (minutes <= 0 && seconds == 0) {
                resetControls()
                updateDisplay()
                return
            }

            if (seconds <= 0) {
                seconds = 2

                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            cowntDown()
        }, 1000)
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeOut) 
    }

    return {
        cowntDown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }

}