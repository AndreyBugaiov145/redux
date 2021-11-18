import {INCREMENT, DICREMENT, ASYNCINCREMENT, THEME, ENABLE_BUTTON, DISABLE_BUTTON} from "./types";

export function increment () {
    return {
        type : INCREMENT
    }
}

export  function dicrement () {
    return {
        type : DICREMENT
    }
}

export  function enableButtons () {
    return {
        type : ENABLE_BUTTON
    }
}

export  function disableButtons () {
    return {
        type : DISABLE_BUTTON
    }
}


export function asyncincrement () {
    return function (dispatch) {
        dispatch(disableButtons())
        setTimeout(()=>{
            dispatch({type:ASYNCINCREMENT})
            dispatch(enableButtons())
        },2000)

    }
}

export function chengeTeme(newTheme) {
 return {
     type : THEME,
     payload : newTheme
 }
}