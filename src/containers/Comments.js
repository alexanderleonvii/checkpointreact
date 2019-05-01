import React from 'react'
import CommentItem from '../components/comments/CommentItem'



const Comments = (props) => {
	let {listItems, likeSubmitter }=props
	let listContent=listItems.map((item, index)=>{	
		return (
			
				<CommentItem 
					key={index}
					item={item}
					likeSubmitter={likeSubmitter}
	 			 />
			
	)
})



return(
    <div>
       
         {listContent}
        
    </div>
)
}


export default Comments


