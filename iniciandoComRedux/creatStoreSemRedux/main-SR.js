"use strict"
let container = document.getElementById("container");



const counter = (state = 0 , action) => {
    switch (action.type)  {
        case "INCREMENT": return state + 1;
        case  "DECREMENT": return state - 1;
    }
    return state
};
const createStore = (reducer) => {
    let state 
    let subscriptions = []
    const dispatch = (action) => {
        state = reducer(state, action)
        subscriptions.forEach((f) => f())
    }

    const subscribe = (func) => {
        subscriptions.push(func)
    }
    dispatch({})
    return {
        getState: () => state,
        dispatch,
        subscribe 
    }
}
const store = createStore(counter);


const $counter = document.querySelector('[data-js="counter"]');
const $increment = document.querySelector('[data-js="increment"]');
const $decrement = document.querySelector('[data-js="decrement"]')
$increment.addEventListener("click", increment, false);
$decrement.addEventListener("click", decrement, false);

function increment() {
    store.dispatch({ type: "INCREMENT" })
}
function decrement() {
    store.dispatch({ type: "DECREMENT" })
}
function render () {
    $counter.textContent = store.getState()
}
store.subscribe(render)
render()


/*   ******metodo de desestruturação do subscribe******

    const subscribe = (func) => {
        subscriptions.push(func)
        return () => {
            subscriptions = subscriptions.filter((f) => f !== func) 
        }
    }
    |
    |
    |
    |
    |
    >    const unsubscribe = store.subscribe(render)
             rende()
         setTimeOut(() => {
                console.log("unsubscribe")
                unsubscribe()
                }, 5000)

                *****EM TEORIA EXECUTANDO ESSE METODO AS FUNC DE INCREMENT E DECREMENT
                     DEVEM PARAR DE EXECUTAR APOS 5SEGUNDOS*****


   
*/