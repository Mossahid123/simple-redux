import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../../Redux/Actions/countAction';

const Counter = () => {
    const count = useSelector(state => state.count)
    console.log(count);
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleReset = () => {
        dispatch(reset())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <h3>Count :{count} </h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;

// state
//action
//reducer
//store