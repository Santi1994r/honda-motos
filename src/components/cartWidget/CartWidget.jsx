import React, { useContext } from 'react'

import { GlobalContext } from '../context/CartContext';
import BtnOffCanvas from '../offCanvas/BtnOffCanvas';
import OffCanvas from '../offCanvas/OffCanvas';
import './cartWidgetStyle.css';


const CartWidget = () => {
  const {count, cart} = useContext(GlobalContext);

  const showCart = () => {
  
      cart.map(moto => (
        <div className='moto' key={moto.id}>
                    <img src={moto.image} alt={moto.name} />
                    <h3>{moto.name}</h3>
                    <button>Eliminar</button>
        </div>
      ))
  };
    
  return (
    <button onClick={showCart} className='btnCart'>
        <OffCanvas />
    </button>
  )
}

export default CartWidget