import React from 'react'
import CommentItem from '../components/comments/CommentItem'



const Comments = (props) => {
	let {comments, likeSubmitter, objectindex} = props
	let indx=-1
	let listComment = comments.map((item, index) => {
		console.log("Key", indx)
		indx++
		return (
			<CommentItem 
				key={index}
				index={indx}
				comment={item.comment}
				likes={item.likes}
				poster={item.poster}
				postdate={item.postdate}
				likeSubmitter={likeSubmitter}
				objectindex={objectindex}
			/>
		)
	});

	return (
		<div>
			{listComment}
		</div>
	)
}

export default Comments