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
const forestBtnOn = document.querySelector('.forestBtnOn')
const rainBtn = document.querySelector('.rainBtn')
const rainBtnOn = document.querySelector('.rainBtnOn')
const coffeeShopBtn = document.querySelector('.coffeeShopBtn')
const coffeeShopBtnOn = document.querySelector('.coffeeShopBtnOn')
const bonfireBtn = document.querySelector('.bonfireBtn')
const bonfireBtnOn = document.querySelector('.bonfireBtnOn')

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
    forestBtnOn,
    rainBtn,
    rainBtnOn,
    coffeeShopBtn,
    coffeeShopBtnOn,
    bonfireBtn,
    bonfireBtnOn
}