import {INCREMENT, DICREMENT, ASYNCINCREMENT, THEME, ENABLE_BUTTON, DISABLE_BUTTON} from "./types";
import {combineReducers} from "redux";

function counterReducer(state = 0,action) {

    if (action.type == INCREMENT){
        return ++state
    }else if (action.type == DICREMENT){
        return --state
    }else if (action.type == ASYNCINCREMENT){
        return ++state
    }

    return state
}
const initialState = {
    value : 'light',
    disabled : false
}

function  themeReducer(state = initialState,action) {
    switch (action.type) {
        case THEME : return {...state , value: action.payload}
        case ENABLE_BUTTON : return {...state , disabled: false}
        case DISABLE_BUTTON : return {...state , disabled:true}
        default :return state
    }

    return state
}

export const rootReducer = combineReducers({
    counter : counterReducer,
    theme : themeReducer,
})