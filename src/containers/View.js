import React from 'react'
import Textarea from '../components/comments/Textarea'
import Button from '../components/comments/Button'
import Comments from '../containers/Comments'

const View = (props) => {
	let {list, clickHandler, addCommentToUnicorn, comment, textareaHandler } = props
	console.log(props)
	console.log(props.match.params.id);
	let index = props.match.params.id - 1
	console.log('View List: ', list[index])
	let item = list[index]

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
				<Textarea comment={comment} textareaHandler={textareaHandler}/>
				<Button addCommentToUnicorn={() => {addCommentToUnicorn(index)}}  />

				<Comments comments={list[index].comments} />
			</div>
    </div>
    </div>
	)
}

export default View