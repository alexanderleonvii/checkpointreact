import React from 'react'
import Button from '../Button'

const ListItem=(props)=>{

    let {item, removeItemFromList, markTaskCompleted, likeSubmitter}=props
// let style
//     if(item.completed){
//         style='completed' 
//     }
       
    return(
        <div className="card">
            {/* <span className={style}>{item.task}</span> */
            item.completed ? (<i>{item.task}</i>) : item.task
            }
            
            <div>
                <Button clickHandler={markTaskCompleted}>
                 {
                    item.completed ? 'me equivoqué':'<3'
                }
                </Button>
                <Button clickHandler={likeSubmitter}> 
                    Me encorazona :v
                </Button>
                <Button clickHandler={removeItemFromList}>
                    Borrar
                </Button>
                {item.likeCounter} likes
                {/* {item.likeCounter}"se incrementa a si mismo en 1", likes */}
            </div>
        </div>
            )
}

export default ListItem