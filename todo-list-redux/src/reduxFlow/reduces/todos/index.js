const {ADD_TODO, TOGGLE_TODO} = require("./actions")
export const initialState = [];
const todos = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                isDone: false
            })
        case TOGGLE_TODO:
           return state.map((todo) => {
               if(todo.id !== action.payload.id) {
                  return todo
               }
               return {
                   ...todo, isDone: !todo.isDone
               }
           })
           default:
               return state
        }
}

export default todos ;