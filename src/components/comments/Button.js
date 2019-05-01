import React from 'react'


const Button = (props) => {
  let {addCommentToUnicorn} = props
  console.log(props)
  return (
    <button className="button" type="button" onClick={addCommentToUnicorn}>
      Enviar
    </button>
  )
} 


export default Button