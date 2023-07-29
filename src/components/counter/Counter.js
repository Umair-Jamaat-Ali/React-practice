import './Counter.css';
import React, {useState} from 'react';


function Counter() {

    const [counts , setCounts ] = useState(0)

function decrementHandler() {
    // setCount(count--)
    setCounts (counts - 1)
}

function incrementHandler() {
    // setCount(count++)
    setCounts (counts + 1)
}

    function resettHandler() {
        setCounts(0);
    }


    return (
        <div className='main-div'>
            <button className='btn-1' onClick={decrementHandler}> - </button>
            <div className='showpath' style={{margin: "10px"}}> {counts} </div>
            <button className='btn-1' onClick={incrementHandler}> + </button>
            <button className='btn-1' onClick={resettHandler} style={{margin: "10px"}}> Reset </button>


        </div>
    )
}

export default Counter;
