export default function () {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const timeoutAlarm = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    
    const bgAudio = [
        new Audio("./sounds/forest.wav"),
        new Audio("./sounds/rain.wav"),
        new Audio("./sounds/coffeeShop.wav"),
        new Audio("./sounds/bonfire.wav")
    ]

    bgAudio.loop = true

    function soundWhenPressingButton(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        timeoutAlarm.play()
    }

    return {
        soundWhenPressingButton,
        timeEnd,
        bgAudio
    }
}