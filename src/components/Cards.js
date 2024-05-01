import React from 'react'
import './Card.module.css'



const Card = (props) => {
    
  return (
   
    <div className='animals'>
      <img height="335px" src={props.image} alt="product-img" className='productImage' />
      <h3 className='animalName'>{props.name}</h3>
      <p className='about'><strong>{props.details}</strong></p>
    </div>
   
  )
}

export default Card;