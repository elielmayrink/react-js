"use strict"
let container = document.getElementById("container");



const counter = (state = 0 , action) => {
    switch (action.type)  {
        case "INCREMENT": return state + 1;
        case  "DECREMENT": return state - 1;
    }
    return state
};
const { createStore } = Redux;
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
store.subscribe(() => {
    console.log("state:", store.getState())
    $counter.textContent = store.getState()
}
)