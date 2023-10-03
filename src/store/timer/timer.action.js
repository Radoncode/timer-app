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