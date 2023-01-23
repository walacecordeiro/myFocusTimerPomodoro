export default function Controls({
    btnPlay,
    btnPause,
    btnSet,
    btnStop
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
    
    function startPauseKey(){
        addEventListener('keypress', function (event){
            if(event.key === 'Enter' && btnPlay.classList == ('play')){
                event.preventDefault()
                play()
            } else if(event.key === 'Enter' && btnPause.classList == ('pause effects')){
                pause()
            } else if(event.key === 'Enter'){
                event.preventDefault()
                play()
            }
        
        })
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

    return {
        reset,
        play,
        pause,
        startPauseKey,
        getMinutes
    }
}