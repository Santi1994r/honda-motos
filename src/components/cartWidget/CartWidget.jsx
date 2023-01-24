import React, { useContext } from 'react'

import { GlobalContext } from '../context/CartContext';
import BtnOffCanvas from '../offCanvas/BtnOffCanvas';
import OffCanvas from '../offCanvas/OffCanvas';
import './cartWidgetStyle.css';


const CartWidget = () => {
  const {count, setCount,  cart, setCart} = useContext(GlobalContext);

  const deleteProduct = (id) => {
    const getProductForDelete = cart.find(item => item.id === id );
    console.log(getProductForDelete);
    setCount( count - 1 );
  };
  
  const showCart = () => {

   
  
      cart.map(moto => (
        <div className='moto' key={moto.id}>
          <img src={moto.image} alt={moto.name} />
          <h3>{moto.name}</h3>
          <button onClick={ () => deleteProduct(moto.id) }>Eliminar</button>
        </div>
      ))
  };
    
  return (
    <div onClick={showCart}>
        <OffCanvas />
    </div>
  )
}

export default CartWidget