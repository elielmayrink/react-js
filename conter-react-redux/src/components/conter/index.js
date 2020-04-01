import React from 'react';
import { connect } from 'react-redux';



const Counter = (props) => {
          
    return (
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>

        </div>
        
    )
}
const mapStateToProp = (state) => ({
        counter: state
})
const mapDispachToProps = (dispatch) => (
    {
        increment: () => dispatch({type: "INCREMENT"}),
        decrement: () => dispatch({ type: "DECREMENT" })
    }
)
export default connect(mapStateToProp, mapDispachToProps)(Counter);