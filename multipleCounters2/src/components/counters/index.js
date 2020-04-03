import React from 'react';
import { connect } from 'react-redux';
import Counter from "../counter"


const Counters = ({removeCounter, increment, decrement,addCounter,counters}) => {
 //const array = 
   //const array = (props.counter)
    //const addCounter = () => {
    //setArray(array => [...array, 0])
 //};
    return (
        <>
        <div className="container">
            {
            counters.map(
                (counter, index) => <Counter {...{
                key: index,
                removeCounter: removeCounter(index),
                increment: increment(index),
                decrement: decrement(index),
                counter}} />)}
        </div>
        <button onClick={addCounter}>Add Counter</button>
        </>
          
    )
 
}

const mapStateToProp = (state) => ({
    counters: state
})

const mapDispachToProps = (dispatch) => (
{
    addCounter: ()  => dispatch({type: "ADD_COUNTER"}),
    removeCounter: (index) => () => dispatch({type: "REMOVE_COUNTER",index}),
    increment: (index) => () => dispatch({type: "INCREMENT", index}),
    decrement: (index) => () => dispatch({ type: "DECREMENT", index })
}
)
export default connect(mapStateToProp, mapDispachToProps) (Counters);