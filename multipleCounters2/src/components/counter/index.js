import React from 'react';




const Counter = ({removeCounter, increment, decrement, counter}) => {
          
    return (
        <div>
            <button onClick={removeCounter} style={{float: "left", fontSize: 10, borderRadius: "50%"}}>&times;</button>
            <h1>{counter}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            

        </div>
        
    )
}

export default Counter;