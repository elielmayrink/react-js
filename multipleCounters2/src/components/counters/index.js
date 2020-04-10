import React from 'react';
import { connect } from 'react-redux';
import Counter from "../counter"
import {addCounter, removeCounter, increment, decrement } from '../../redux-flow/reducers/counters/actions-creators';

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
    addCounter: ()  => dispatch(addCounter()),
    removeCounter: (index) => () =>  dispatch(removeCounter(index) ),
    increment: (index) => () => dispatch(increment(index)),
    decrement: (index) => () => dispatch(decrement(index))
}
)
export default connect(mapStateToProp, mapDispachToProps) (Counters);