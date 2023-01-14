import React, { useState } from 'react'
import { BsFillCartPlusFill   } from 'react-icons/bs';
import './cartWidgetStyle.css'

const CartWidget = () => {

    
  return (
    <button className='btnCart'>
        <BsFillCartPlusFill />
        <p>{/* count */}</p>
    </button>
  )
}

export default CartWidget