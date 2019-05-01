import React from 'react';

const Textarea = (props) => {
	let {inputHandler, taskValue}=props
	
	return (
	

		<textarea className="textarea" 
		placeholder="Los comentarios van aqui!!" 
        value={taskValue} 
        onChange={inputHandler}
        onKeyPress={inputHandler} >
		</textarea>
	)
}

export default Textarea