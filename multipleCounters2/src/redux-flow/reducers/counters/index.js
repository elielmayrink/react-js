import {ADD_COUNTER, REMOVE_COUNTER,INCREMENT,DECREMENT, initialValue } from './actions';

export default (state = initialValue, action) => {
    switch (action.type)  {
        case ADD_COUNTER:
          return state.concat(0)
        case REMOVE_COUNTER:
          return state.filter(( _, index) =>  index!== action.index)  
        case INCREMENT: 
        return state.map((state, index) => {
        return index === action.index ? state + 1 : state
      });
        case  DECREMENT: 
        return state.map((state, index) => {
         return index === action.index ? state - 1 : state
      });
        default: return state
    }
};