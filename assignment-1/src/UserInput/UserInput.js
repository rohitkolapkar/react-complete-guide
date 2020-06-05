import React from 'react';
const inputstyle={
    border:'2px solid red'
};

const userInput=(props)=>{
    return(
        <input 
        type='text'
        style={inputstyle} 
        onChange={props.change} 
        value={props.currentName} />
    )
}
export default userInput;