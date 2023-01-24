export default function () {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const timeoutAlarm = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const forestBtnAudio = new Audio("./sounds/forest.wav")
    const rainBtnAudio = new Audio("./sounds/rain.wav")
    const coffeeShopBtnAudio = new Audio("./sounds/coffeeShop.wav")
    const bonfireBtnAudio = new Audio("./sounds/bonfire.wav")

    forestBtnAudio.loop = true
    rainBtnAudio.loop = true
    coffeeShopBtnAudio.loop = true
    bonfireBtnAudio.loop = true

    function soundWhenPressingButton(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        timeoutAlarm.play()
    }

    return {
        soundWhenPressingButton,
        timeEnd,
        forestBtnAudio,
        rainBtnAudio,
        coffeeShopBtnAudio,
        bonfireBtnAudio
    }
}