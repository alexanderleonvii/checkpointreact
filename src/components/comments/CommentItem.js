import React from 'react'
import Button from './Button'
const Comments = (props) => {
	let {comment, likes, poster, postdate, likeSubmitter, objectindex, index} = props
	console.log("Liker", props)
	return (
		<div>
			<div className='poster-txt'>Publicado por: {poster}, {postdate}  </div>
			<div className='comment-txt'>{comment} </div>
			<div className='likes'>
				<Button clickHandler={() => {likeSubmitter(objectindex,index)}}>
					🦄
				</Button>
				    {likes}
			</div>
		</div>
	)
}

export default Comments