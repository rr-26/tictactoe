import React from 'react';

export default function Sqaure(props){
    return(
        <button className='square' onClick={props.handleClick}>
            {props.value}
        </button>
    )
}