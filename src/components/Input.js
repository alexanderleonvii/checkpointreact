import React from 'react'

const Input =(props)=>{

    let {inputHandler, taskValue}=props
    return (
        <input type="text" 
        placeholder="Escribe tu comentario..." 
        value={taskValue} 
        onChange={inputHandler}
        onKeyPress={inputHandler} />
    )
}

export default Input