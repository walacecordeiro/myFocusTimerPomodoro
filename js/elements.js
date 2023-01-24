//  CONTROLS
const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')
const fiveMoreMinutesBtn = document.querySelector(".fiveMoreMinutesBtn")
const minusFiveMinutesBtn = document.querySelector(".minusFiveMinutesBtn")

//  TIMER
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

//  SOUNDS
const forestBtn = document.querySelector('.forestBtn')
const rainBtn = document.querySelector('.rainBtn')
const coffeeShopBtn = document.querySelector('.coffeeShopBtn')
const bonfireBtn = document.querySelector('.bonfireBtn')

export const elements = {
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
}