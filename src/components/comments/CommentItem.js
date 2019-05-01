import React from 'react'
import Button from '../comments/Button'

const CommentItem = (props) => {
	let {item, likeSubmitter}=props
return (
		<div className="card">
            
            
            <div>
                
                <Button clickHandler={likeSubmitter}> 
                    Me gusta
                </Button>
                {item.likeCounter} likes
                {/* {item.likeCounter}"se incrementa a si mismo en 1", likes */}
            </div>
        </div>
	)
}

export default CommentItem

