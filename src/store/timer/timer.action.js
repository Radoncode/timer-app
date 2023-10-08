import { TIMER_ACTION_TYPES } from "./timer.types";


export const setCurrentHours =  (hours) => {
    return {
        'type': TIMER_ACTION_TYPES.SET_CURRENT_HOURS,
        'payload': hours
    }
}

export const setCurrentMinutes =  (minutes) => {
    return {
        'type': TIMER_ACTION_TYPES.SET_CURRENT_MINUTES,
        'payload': minutes
    }
}

export const setCurrentSeconds =  (seconds) => {
    return {
        'type': TIMER_ACTION_TYPES.SET_CURRENT_SECONDS,
        'payload': seconds
    }
}

export const setStartTimer = (bool) => {
    return {
        'type' : TIMER_ACTION_TYPES.START_TIMER,
        'payload': bool
    }
}

export const setPauseTimer = (bool) => {
    return {
        'type' : TIMER_ACTION_TYPES.PAUSE_TIMER,
        'payload': bool
    }
}

export const setResumeTimer = (bool) => {
    return {
        'type' : TIMER_ACTION_TYPES.RESUME_TIMER,
        'payload': bool
    }
}