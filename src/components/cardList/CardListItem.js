import React from 'react'
import { Link } from 'react-router-dom';

const CardListItem = (props) => {
  let { item } = props
  console.log('CardListItem: ', item, item.image, item.text )
  return(
    <div className="cardItem">
      <h2>{item.unicorn}</h2>
      <figure>
        <img src={item.image} alt={item.unicorn}
        />
      </figure>
      <object data={item.text}>{item.text}</object>
      <Link to={`/view/${item.id}`}>
        <button className="button">
          Vé a {item.unicorn}
        </button>
      </Link>
    </div>
  )
}

export default CardListItem
