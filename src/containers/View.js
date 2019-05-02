import React from 'react'
import Textarea from '../components/comments/Textarea'
import Button from '../components/comments/Button'
import Comments from '../containers/Comments'

const View = (props) => {
	let {list, userHandler, addCommentToUnicorn, likeSubmitter, comment, poster, textareaHandler } = props
	console.log(props)
	console.log(props.match.params.id);
	let index = props.match.params.id - 1
	console.log('View List: ', list[index])
	let item = list[index]
	let isButtonEnabled = (comment.length>0 && poster.length>0)? "" : "disabled"
	

	return (
		<div className="home-intro view">
		<div className="cardItem">
      <h2>{item.unicorn}</h2>
      <figure>
        <img src={item.image} alt={item.unicorn}
        />
      </figure>
      <object data={item.text}></object>
			<div>
				<h2>Deja tu comentario:</h2>
				<div>
				<Comments 
					comments={list[index].comments}
					likeSubmitter={likeSubmitter}
					objectindex={index}
				/>
				</div>
				<div>
				<Textarea 
					comment={comment}
					textareaHandler={textareaHandler}
					textClass="textarea"
					textPlaceHolder="Agrega tu comentario aqui!"
				/>
				</div>
				<div>
				<Textarea 
					comment={poster}
					textareaHandler={userHandler}
					textClass="usertextarea"
					textPlaceHolder="Ingresa tu correo aqui"
				/>
				<Button
					clickHandler={() => {addCommentToUnicorn(index)}}
					enabler = {isButtonEnabled}
				>
					Enviar
				</Button>
				</div>
			</div>
    </div>
    </div>
	)
}

export default View