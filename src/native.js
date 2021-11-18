import './styles.css'
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from './redux/rootReducer'
import {increment,dicrement,asyncincrement,chengeTeme} from "./redux/actions";

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer,applyMiddleware(thunk,logger));

function logger (state){
    return function (next) {
        return function (action) {
            console.log(action)
            return next(action)
        }
    }
}

addBtn.addEventListener('click',()=>{
    console.log('addBtn')
    store.dispatch(increment())
})

subBtn.addEventListener('click',()=>{

    store.dispatch(dicrement())
})

asyncBtn.addEventListener('click',()=>{
    store.dispatch(asyncincrement())

})

themeBtn.addEventListener('click',()=>{
    let newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    store.dispatch(chengeTeme(newTheme))
})

store.subscribe(()=> {
    const state = store.getState()
    console.log(state)
    counter.textContent = state.counter
    document.body.className = state.theme.value;
    [addBtn,subBtn,asyncBtn,themeBtn].forEach(btn=>btn.disabled = state.theme.disabled)
})

store.dispatch({type:'__INIT_APPLICATION__'})
