import React from 'react'

const Comments = (props) => {
	let {comment, likes} = props
	return (
		<div>
			<div className='comment-txt'>{comment} </div>
			<div className='likes'>Likes: {likes}</div>
		</div>
	)
}

export default Comments