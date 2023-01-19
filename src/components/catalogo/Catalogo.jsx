import React, { useContext } from 'react'
import { GlobalContext } from '../context/CartContext';
import './catalogo.css'

const Catalogo = () => {
    const {count, setCount, motos, cart, setCart} = useContext(GlobalContext);

    const addToCart = (moto) => {
        setCount(count + 1);
        const chooseMotorBike = motos.find(bike => bike.id === moto);
        let existInTheCart = cart.find(item => item.id === chooseMotorBike.id);
        existInTheCart
        ? setCart([...cart, chooseMotorBike.quantity++])
        : setCart([...cart, chooseMotorBike])
        console.log(cart);
    };



  return (
    <div className='containerMotos'>
        {
            motos.map(moto => (
                <div className='moto' key={moto.id}>
                    <img src={moto.image} alt={moto.name} />
                    <h3>{moto.name}</h3>
                    <p>{`Precio: $${moto.price}`}</p>
                    <button onClick={() => addToCart(moto.id)}>Agregar al carrito</button>
                </div>
            ))
        }
    </div>
  )
}

export default Catalogo