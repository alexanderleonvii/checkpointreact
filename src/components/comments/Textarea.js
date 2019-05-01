import React from 'react';

const Textarea = (props) => {
	let {comment, textareaHandler} = props
	return (
		<textarea className="textarea" onChange={textareaHandler} placeholder="Los comentarios van aqui!!">{comment}</textarea>
	)
}

export default Textarea