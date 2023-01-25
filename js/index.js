import Sounds from "./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"

import {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,

    minutesDisplay,
    secondsDisplay

} from "./elements.js"

//  SOUNDS
const sounds = Sounds()

//  CONTROLS
const controls = Controls({
    btnPlay,
    btnPause,
    btnSet,
    btnStop
})

//  TIMER
const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

Events({controls, timer, sounds})