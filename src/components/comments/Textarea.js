import React from 'react';

const Textarea = (props) => {
	let {comment, textareaHandler, textClass, textPlaceHolder} = props
	return (
		<textarea className={textClass} onChange={textareaHandler} value={comment} placeholder={textPlaceHolder}/>
	)
}

export default Textarea