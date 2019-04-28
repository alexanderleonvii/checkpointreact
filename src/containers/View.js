import React from 'react'
import CommentBox from './CommentBox'

const View = (props) => {
	let {list, clickHandler
	// recibir las funciones y el task
	} = props
	console.log(props.match.params.id);
	let index = props.match.params.id - 1
	console.log('View List: ', list[index])
	let item = list[index]

	return (
		<div className="home-intro view">
		<div className="cardItem">
      <h2>{item.unicorn}</h2>
      <figure>
        <img src={item.image} 
        />
      </figure>
      <object data={item.text}></object>
			<div>
				<h2>Deja tu comentario:</h2>
				<div>
					<CommentBox />
					{/* reemplazr este texto por el componente que se llama commentbox */}
				</div>
			</div>
    </div>
    </div>
	)
}
// crear un componente para el comment box, éste en carpeta containers
// dentro del coomentbox van dos componentes: header de comentarios y otro es la lista de comentarios; estos van el carpeta de components 
// y un componente para cada comentario

export default View