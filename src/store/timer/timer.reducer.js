import { TIMER_ACTION_TYPES } from "./timer.types";

const INITIAL_STATE = {
    currentHours: 0,
    currentMinutes: 0,
    currentSeconds: 0,
    isTimerRunning: false
}

export const timerReducer = (state= INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case TIMER_ACTION_TYPES.SET_CURRENT_HOURS:
            return { ...state, currentHours: payload }
        case TIMER_ACTION_TYPES.SET_CURRENT_MINUTES:
            return { ...state, currentMinutes: payload }
        case TIMER_ACTION_TYPES.SET_CURRENT_SECONDS:
            return { ...state, currentSeconds: payload }
        case TIMER_ACTION_TYPES.START_TIMER:
            return {
                ...state, isTimerRunning: payload
            }
        default:
            return state;
    }
}