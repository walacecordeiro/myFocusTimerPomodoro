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

//  MODES
const btnLightMode = document.querySelector('.lightMode')
const btnDarkMode = document.querySelector('.darkMode')

//  VOLUME INPUT
const volForest = forestBtnOn.querySelector('input')
const volRain = rainBtnOn.querySelector('input')
const volCoffeeShop = coffeeShopBtnOn.querySelector('input')
const volBonfire = bonfireBtnOn.querySelector('input')

export {
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
    bonfireBtnOn,

    btnLightMode,
    btnDarkMode,

    volForest,
    volRain,
    volCoffeeShop,
    volBonfire
}