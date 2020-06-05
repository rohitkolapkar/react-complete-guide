import React from 'react';
import './UserOutput.css';
const userOutput=(props)=>{
    return(
        <div className='UserOutput'>
            <p>Hi.. {props.userName}</p>
            <p>I hope corona will go soon !</p>
        </div>

    )
}
export default userOutput;