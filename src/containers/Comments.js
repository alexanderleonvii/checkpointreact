import React from 'react'
import CommentItem from '../components/comments/CommentItem'



const Comments = (props) => {
	let {comments} = props

	let listComment = comments.map((item, index) => {
		
		return (
			<CommentItem key={index} comment={item.comment} likes={item.likes} />
		)
	});

	return (
		<div>
			{listComment}
		</div>
	)
}

export default Comments