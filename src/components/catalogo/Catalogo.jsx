import React, { useContext } from 'react'
import { GlobalContext } from '../context/CartContext';
import './catalogo.css'

const Catalogo = ({ motos }) => {
    const {count, setCount, cart, setCart} = useContext(GlobalContext);

    const addToCart = (moto) => {
        setCount(count + 1);
        setCart([...cart, moto])
        console.log(cart);
    };

    
  return (
    <div className='containerMotos'>
        {
            motos.map(moto => (
                <div className='moto' key={moto.id}>
                    <img src={moto.image} alt={moto.name} />
                    <h3>{moto.name}</h3>
                    <p>{moto.price}</p>
                    <button onClick={() => addToCart(moto)}>Ver producto</button>
                </div>
            ))
        }
    </div>
  )
}

export default Catalogo