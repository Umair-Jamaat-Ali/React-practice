import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button className='btn' style={props.style}>
               {props.text}
            </button>
        </div>
    );
}

export default Button;
