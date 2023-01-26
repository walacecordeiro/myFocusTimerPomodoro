
export default function Controls({
    btnPlay,
    btnPause,
    btnSet,
    btnStop,
    btnLightMode,
    btnDarkMode
}) {

    function play(){
        btnPlay.classList.add('hide', 'effects')
        btnPause.classList.remove('hide')
        btnSet.classList.add('hide')
        btnStop.classList.remove('hide')
    }
    
    function pause(){
        btnPause.classList.add('hide')
        btnPlay.classList.remove('hide')
    }

    function reset() {
        btnPause.classList.add('hide')
        btnPlay.classList.remove('hide')
        btnStop.classList.add('hide')
        btnSet.classList.remove('hide')
        btnSet.classList.add('effects')
    }

    function getMinutes(){
        let newMinutes = prompt('Quantos minutos?')
    
        if(!newMinutes){
            return false
        }
    
        return newMinutes
        
    }

    function mode(){
        const html = document.documentElement

        btnLightMode.classList.toggle('hide')
        btnDarkMode.classList.toggle('hide')
        
        html.classList.toggle('darkMode')
    }

    return {
        reset,
        play,
        pause,
        // startPauseKey,
        getMinutes,
        mode
    }
}