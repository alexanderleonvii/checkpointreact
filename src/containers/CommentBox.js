import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

const CommentBox = (props)=>{
    let {inputHandler, clickHandler, taskValue}=props
    return(
        <div className="card">
        <h1>Caja de comentarios</h1>
        <Input
        inputHandler={inputHandler}
        taskValue={taskValue}
        />
       <Button
          clickHandler={clickHandler}>
          Enviar
           </Button>
    </div>
    )
}

export default CommentBox