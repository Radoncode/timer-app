import { combineReducers } from "redux";

import { timerReducer } from "./timer/timer.reducer";

export const rootReducer = combineReducers({
    timer: timerReducer
})